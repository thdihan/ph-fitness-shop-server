/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe')(
  'sk_test_51Pkp2rLw1MUS3mw46Oj5y05wwyp0pA4ctNcJ75O8c4vTXLzwSHUJAXKLYwqCeFHVUVlb2IlB2NGpEuDg9O0VXRFV00CLfTs506',
);

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hi Next Level Developer !');
});

app.post('/create-payment-intent', async (req, res) => {
  const { price } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseInt(price) * 100,
    currency: 'usd',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;

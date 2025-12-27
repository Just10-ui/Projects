import express from 'express';
import cors from 'cors';

export const parseJson = express.json();
export const corsJson = cors({ origin: 'http://127.0.0.1:5500'});
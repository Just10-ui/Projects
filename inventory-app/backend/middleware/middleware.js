import express from 'express';
import cors from 'cors';

export const parseJson = express.json();
export const corsJson = cors({origin: 'http://localhost:5500'});
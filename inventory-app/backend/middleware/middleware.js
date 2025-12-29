import express from 'express';
import cors from 'cors';

export const parseJson = express.json();
export const crossOrigin = cors({origin: 'http://localhost:5500'});
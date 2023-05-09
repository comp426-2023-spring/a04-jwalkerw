#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import {rps, rpsls} from './lib/rpsls.js';

// Create options and express
const options = minimist(process.argv.slice(2));
const app = express();
// Port option of default
const portVar = options.port ?? 5000;
// Use app
app.use(express.json());

// Endpoints and Plays
app.get('/app/', (req, res) => {	res.status(200).send("200 OK"); });
app.get('/app/rps/', (req, res) => { res.status(200).send(rps(null)); });
app.get('/app/rpsls/', (req, res) => { res.status(200).send(rpsls(null)); });
app.get('/app/rps/play/', (req, res) => { res.status(200).send(rps(req.query.shot)); });
app.get('/app/rps/play/', (req, res) => { res.status(200).send(rps(req.body.shot)); });
app.get('/app/rps/play/:shot/', (req, res) => { res.status(200).send(rps(req.params.shot)); });
app.get('/app/rpsls/play/', (req, res) => { res.status(200).send(rpsls(req.query.shot)); });
app.get('/app/rpsls/play/', (req, res) => { res.status(200).send(rpsls(req.body.shot)); });
app.get('/app/rpsls/play/:shot/', (req, res) => { res.status(200).send(rpsls(req.params.shot)); });

//Listen
app.listen(portVar, () => { console.log("We're listening on port " + portVar); });

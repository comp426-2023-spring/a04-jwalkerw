#!/usr/bin/env node

import minimist from 'minimist';
import express from 'express';
import { rps, rpsls } from './lib/rpsls.js';

// Create options and express
const options = minimist(process.argv.slice(2));
const app = express();
// Port option of default
const portVar = options.port ?? 5000;
// Use app
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Endpoints and Plays
app.get('/app', (req, res) => { res.status(200).send("200 OK"); });
app.get('/app/rps', (req, res) => { res.status(200).send(rps()); });
app.get('/app/rpsls', (req, res) => { res.status(200).send(rpsls()); });
// RPS
app.get('/app/rps/play', (req, res) => { res.status(200).send(rps(req.query.shot)); });
app.post('/app/rps/play', (req, res) => { res.status(200).send(rps(req.body.shot)); });
app.get('/app/rps/play/:shot', (req, res) => { res.status(200).send(rps(req.params.shot)); });
// RPSLS
app.get('/app/rpsls/play', (req, res) => { res.status(200).send(rpsls(req.query.shot)); });
app.post('/app/rpsls/play', (req, res) => { res.status(200).send(rpsls(req.body.shot)); });
app.get('/app/rpsls/play/:shot', (req, res) => { res.status(200).send(rpsls(req.params.shot)); });
// Not found
app.get('*', (req, res) => { res.status(400).send("404 NOT FOUND"); });

//Listen
app.listen(portVar, () => { console.log("We're listening on port " + portVar); });

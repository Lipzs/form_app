import express from 'express';

export default class FormController {
  async doSchedule(req, res) {
    console.log(req.body);
    res.status(200);
    
    return res;
  }
}
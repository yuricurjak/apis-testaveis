import supertest from 'supertest';
import chai from 'chai';
import setupApp from '../../src/app';

global.supertest = supertest;
global.setupApp = setupApp;
global.expect = chai.expect;
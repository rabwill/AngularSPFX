import * as angular from 'angular';
import HelloController from './HelloController';

import 'ng-office-ui-fabric';
const todoapp: ng.IModule = angular.module("todoapp",[]);

todoapp.controller("HelloController", HelloController);
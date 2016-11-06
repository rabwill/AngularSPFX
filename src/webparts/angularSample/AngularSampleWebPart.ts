import {
  BaseClientSideWebPart,
  IPropertyPaneSettings,
  IWebPartContext,
  PropertyPaneTextField
} from '@microsoft/sp-client-preview';
import ModuleLoader from '@microsoft/sp-module-loader';

import styles from './AngularSample.module.scss';
import * as strings from 'angularSampleStrings';
import { IAngularSampleWebPartProps } from './IAngularSampleWebPartProps';
import * as angular from 'angular';

export default class AngularSampleWebPart extends BaseClientSideWebPart<IAngularSampleWebPartProps> {
private $injector: ng.auto.IInjectorService;
  public constructor(context: IWebPartContext) {
    super(context);
     ModuleLoader.loadCss('https://appsforoffice.microsoft.com/fabric/2.6.1/fabric.min.css');
    ModuleLoader.loadCss('https://appsforoffice.microsoft.com/fabric/2.6.1/fabric.components.min.css');
  }

  public render(): void {


    this.domElement.innerHTML = `
    <div data-ng-app="todoapp">

       <div data-ng-controller='HelloController'>
        <div ng-show="isLoaded">
          {{message}}
         </div>
       </div>
    </div>`; require('./app/appmodel');

    /*var myapp = angular.module('myapp', []);
     myapp.controller('indexCtrl', function($scope){
      $scope.message = "Hello";
          });*/


  }




  protected get propertyPaneSettings(): IPropertyPaneSettings {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
protected get disableReactivePropertyChanges(): boolean {
    return true;
  }
}

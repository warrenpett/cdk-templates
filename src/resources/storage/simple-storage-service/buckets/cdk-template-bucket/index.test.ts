import {App} from 'aws-cdk-lib'
import { Template } from 'aws-cdk-lib/assertions'
import { CdkTemplateInfrastructureStack } from '../../../../../stacks/cdk-template'


describe(CdkTemplateInfrastructureStack, () => {

    // Setup template for testing
    const app = new App()
    const stack = new CdkTemplateInfrastructureStack(app, 'CdkTemplateInfrastructureStack')
    const template = Template.fromStack(stack)

    test('SQS Queue', () => {
        template.hasResourceProperties('AWS::SQS::Queue', {
          VisibilityTimeout: 300
        })
        template.resourceCountIs('AWS::SQS::Queue', 2)
    });
})


import { Duration } from 'aws-cdk-lib'
import * as sqs from 'aws-cdk-lib/aws-sqs'
import { Construct } from 'constructs'

export class CDKTemplateDeadLetterQueue extends sqs.Queue {
    constructor(scope: Construct) {
        super(scope, 'CDKTemplateDeadLetterQueue', {
            queueName: 'cdk-template-dead-letter',
            retentionPeriod: Duration.days(14),
            visibilityTimeout: Duration.seconds(300)
        })
    }
}
import { Duration } from 'aws-cdk-lib'
import * as sqs from 'aws-cdk-lib/aws-sqs'
import { Construct } from 'constructs'

interface CDKTemplateQueueProps {
    cdkTemplateDeadLetterQueue: sqs.IQueue
}

export class CDKTemplateQueue extends sqs.Queue {
    constructor(
        scope: Construct, { cdkTemplateDeadLetterQueue }: CDKTemplateQueueProps
    ) {
        super(scope, 'CDKTemplateQueue', {
            queueName: 'cdk-template-queue',
            retentionPeriod: Duration.days(14),
            visibilityTimeout: Duration.seconds(300),
            deadLetterQueue: {
                queue: cdkTemplateDeadLetterQueue,
                maxReceiveCount: 3
            }
        })
    }
}
# Building A Web-Based Big Data Analytics Infrastructure

In this project, a web application that includes Kafka and a data analytics engine has been developed.

## Kafka

### Setting Up Zookeeper-Based Kafka Messaging System (Old)

![Setting Up Kafka](https://github.com/cllckn/decision-support-systems/blob/main/Module1/setting-up-the-development-environment.md)


### Setting Up KRaft-Based Kafka Messaging System (New)

* Go to https://kafka.apache.org/quickstart/  
* Binary download: 4.1.x (https://kafka.apache.org/community/downloads/)
* Extract Kafka
```shell
#Generate a Cluster UUID 
$ KAFKA_CLUSTER_ID="$(bin/kafka-storage.sh random-uuid)"

#Format Log Directories
$ bin/kafka-storage.sh format --standalone -t $KAFKA_CLUSTER_ID -c config/server.properties

#Start the Kafka Server
$ bin/kafka-server-start.sh config/server.properties
```

### Testing Kafka

[Consumers and Producers](./utils)



## Web Application

[Web Application](./app)

## Data analytics engine 

The system includes a Python-based logistic regression model to make predictions on the Iris dataset.

[Train ML Model](../README.md#train-ml-model)

[Use ML Model For Prediction](../README.md#use-ml-model-for-prediction)

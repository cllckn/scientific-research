# Building A Web-Based Big Data Analytics Infrastructure

In this project, a web application that has  Kafka and data analytics engine has been developed. 


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


***For linux and OSx based systems***

```
# Kafka stores critical metadata in log.dirs. default logs dir is in /tmp folder, where all the data reset after reboot.
# To make it persistent-otherwise we need to execute that three command again, after each reboot.
mkdir /opt/programs/kafka/kafka-logs
sudo chown -R orca:orca /opt/programs/kafka/kafka-logs
nano /opt/programs/kafka/config/server.properties
modify log.dirs=/opt/programs/kafka/kafka-logs

```


For KRaft support, only two lines need to be added or modified in the Node.js source code.

```javascript
// For Kafka with KRaft
const { Partitioners } = require('kafkajs')
//const kafkaProducer = kafka.producer();
const kafkaProducer= kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })
```


Data analytics engine has a Logistic Regression model trained to predict IRIS data,  and cen be found in PyCharm project
under the module 6.


 # Kubernetes

 ## Master Node
    - Control plan
    - Responsible for Kubernetes 'State'

### Master Node Contains following component:

#### Kube-API Server
    - Front end for the Kubernetes control plane
    - All changes go through the API

#### Kube-Scheduler
    - Assigns Pods to the Worker Servers
    - Accounts for factors like CPU, System Architecture and Policies.

#### Kube-Controllers
    - Assigns pods to Worker servers
    - Accounts for factors like CPU, System Architecture and Policies.

#### Etcd
    - Cluster config data saved to ETCD
    - Distributed key-value storage that all control nodes can access



## Worker Node
    - Responsible for 'workload' of running containers

### Worker Node Contains following component:

#### Runtime

#### Kubelet

#### Kube-Proxy


## Pods
    - Pods are the smallest most basic deployable objects in the Kubernetes. Pods consist of one or more containers.

### Pods Contains:

### An local IP address

### One or more containers

### Shared volumes

### Pod-manifest.yml

## Deployment and Replica set

## Services


## Volumes

    - Location (/var/data/myapp)

### Types of Volumes
    - emptyDir
    - hostPath
    - gcePersistentDisk
    - awsElasticBlockStore
    - nfs
    - iscsi
    - flocker
    - glusterfs
    - rbd
    - cephfs
    - gitRepo
    - configMaps
        - Key-Value pairs for plain text data
        - commonly used to inject configuration data into POD containers
    - secret
        - Key-Value pairs for secret data (encrypted)
        - Used for passwords API keys etc 
    - persistentVlumeClaim
    - downwardAPI
    - AzureFilevolume
    - azureDisk
    - vsphereVolume
    - Quobyte
    - Portworxvolume
    - acaleIO




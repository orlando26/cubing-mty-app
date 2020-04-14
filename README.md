# cubing-mty-ws #

# README #

Ionic cubing mty app


### How do I get set up? ###

* run following command in folder ednamoda-app to install dependancies.

```bash
    npm install
```

* run following command to start application.

```bash
    ionic serve 
```

##### useful commands

* create a new page

```bash
    ionic g page pages/<pageName> --spec=false
```

* create a new service

```bash
    ionic g service services/<serviceName> --skipTests
```

### Contribution guidelines ###

##### Branch naming conventions 

** Feature **:
Feature branches are used for specific feature work or improvements. They generally branch from, and merge back into, the development branch, by means of pull requests. See Feature branch workflow.

feature/<branch_name>
* * *

** Release **:
Release branches are used for release task and long-term maintenance of software versions. Typically, they branch from, and fixes are merged back into, the development branch. Merging into an older release branch allows for automatic merging to newer release branches as well as the development branch.

release/<branch_name>
* * *

** Bugfix **:
Bugfix branches are typically used to fix release branches.  

bugfix/<branch_name>
* * *

** Hotfix **
Hotfix branches are used to quickly fix the production branch without interrupting changes in the development branch. In a Gitflow-based workflow, changes are usually merged into the production and development branches.

hotfix/<branch_name>

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact
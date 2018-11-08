# Terminal and Git

## Resources 
- https://www.git-tower.com/blog/command-line-cheat-sheet/
- https://www.git-tower.com/blog/git-cheat-sheet

## Git Flow
#### Set up repo
  1. Fork the repo you want to copy
  2. git clone <repo url>

#### Local changes
  1. git status
  2. make changes to your code
  3. git add .
  4. git commit -m "Your commit message"
  5. git push

#### Pull Request back to the original repo
  1. Pull request on the service your using

#### Extra - develop on branches
- git branch `develop` - creates branch
- git branch -av - lists branch
- `*` is terminal's way to indicate HEAD
- git status "on branch master"
- git checkout `develop` - switches to new branch
- git status
- make changes
- git add .
- git commit -m "change made to develop branch"
- git checkout master - go to original/master 
- git branch -av
- git merge `develop`
- git status
- git push - pushes merged repo to github


  1. Use branching when building features out

## Basic Commands
 - ls: lists contents of directory
 - clear: clears terminal
 - cd: change directory, enters into a directory
 - cd ..: change directory, exits out of directory
 - cd ~: change directory, takes you to top level of directory

## Making Directories
  - mkdir: makes a new directory in current directory
  - touch "new-file.js": makes a new file in current directory
  - rm "new-file.js": deletes file selected, does not prompt for confirmation or place in trash bin

## Git Commands
- git clone ________
- git add . - adds all the files changed
  - tracks the changes
  - can do multiple adds before a commit
- git commit -m “….” - Commit changes to head (but not yet to the remote repository)
- git commit -a Commit any files you've added with git add, and also commit any 
  - commit saves those changes to and keeps a record
- files you've changed since then
- git push - Send changes to the master branch of your remote repository:
- code . - opens repository in vscode
- status - use when in git repository
- git push - places local repo to github

- pull request: you submit your work to the owner for review. Then they can merge if they'd like.
- once you did a pull request, you can do git add, git commit, git push

- git init - creates a repo on computer




- git branch develop - creates a branch of repo
- HEAD - how you know which branch you're working on
  - git checkout - checks out the branch you want and assigns it to your current head
- git merge `name of branch` - merges branch with head


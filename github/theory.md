# Git and Github
- Git is a version control system that is used to track the files of project, view the history of the application codebase.
- Git is installed on our PC(local)
- Github is a hosting platform for git repositories.

## VCS types: 
- Centralized: Backup, track and synchronize files
- Distributed: Collaborator has whole changes/ code. Can work offline tracking changes of local repo. To publish, fetch latest changes we need to be online.    

## Workflow of git:
1. Modify a file from the working directory
2. Add these files to staging area (add)
3. Commit moves files from staging area (commit)
4. After push, it stores changes permanently to git repo (push)

## Blobs:
- Binary large objects
- Each version of file is represented as blob.
- It holds file data, but doesn't contain any metadata of the file.
- Binary file in git database
- Named as SHA1 hash of that file.
- Git files are not addressed by names, everything is content-addressed

## Trees:
- Object, represents directory.
- It holds blobs and other sub-directories
- Binary file, stores reference to blobs and trees
- Named as SHA1 hash of the tree object

## Commit:
- Holds the current state of repo.
- Named by SHA1 hash.
- commit object -> node of the linked list
- Every commit has a pointer to parent commit object.
- If commit has multiple parent commits, then that commit is created by merging two branches

## Process:
### New Repo
1. git init (initialize a git repo)
2. git status (see status of repo)
3. git add . (stage all untracked files)
4. git rm --cached file (to unstage files)
5. git commit -m"commit message" (to commit all staged files)

### Connecting local repo to online github
1. git remote -v (check existing remote origin)
2. git remote add origin "repo-url" (to link local to remote)
3. git push (to push all changes to online platform)

### Existing repo(cloning)
1. git clone repo-url (to clone project from github)

### Github authenticaton using SSH
1. Generate ssh keys: ssh-keygen -t rsa -b 4096 -C "email"
2. It will prompt you to name that file: "file"
3. Copy contents from file.pub
4. Add SSH key in github, paste public key from file.pub
5. Configure it with local ssh agent

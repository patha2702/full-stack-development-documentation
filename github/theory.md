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
4. git restore --staged filename (to unstage files)
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
5. Configure it with local ssh agent (ssh-add "path/to/key")

## Git Branching
- We can create branches from the master/ main branch, for developing features and merge the branch after finishing and testing.
### Process
1. git branch (to check the current branch)
2. git branch branch_name (to create a branch)
3. git checkout branch_name (to switch branch)
4. git checkout -b branch_name (create and switch to branch)
5. git diff new_branch (to see code changes between current branch and new_branch)
6. git merge branch_name (to merge branch with main)
7. git push -u origin branch_name (to push branch to remote)
8. Creating a Pull Request (PR to merge changes from one branch to other)

## Git Merge conflict
- 
- Merge conflict can arise at two stages
a. While starting the merge process:
- If there are changes in the working directory's stage area for the current project, merge won't start
b. During the merge process:
- When there is a conflict between local branch and the branch being merged.
### Commands to resolve conflicts:
1. git status (See which files are unmerged after merge conflict.)
2. git log --merge (produce the list of commits that are causing the conflict)
3. git diff (identify differences between the states repos or files)
4. git checkout (to undo changes made to a file, or changing branches)
5. git reset --mixed (to undo changes to the working directory and staging area)
6. git merge --abort (for exiting the merge process and returning back to state before merging began)
7. git reset (To reset conflicted files to their original state)

Delete the branch after merging successfully to the main branch



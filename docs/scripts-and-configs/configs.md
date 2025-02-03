---
sidebar_position: 2
---

# Configurations

This is a basic configuration starter "package" for setting up a new Mac environment, according to what I need. Having always needed to configure everything by hand along with referring (or trying to remember) older machine configurations, this helps me get going quickly.

You can also find this information under [AdamJ/config](https://github.com/AdamJ/config "Link to my config repo")

## Items

- Software downloads
- Install &amp; configure iTerm 2
- Install **ZSH** and **OhMyZSH**
- Configure GitHub access
- Dev environment setup
- Configure Node using **NVM**

### gitconfig

``` bash
[filter "lfs"]
    required = true
    clean = git-lfs clean -- %f
    smudge = git-lfs smudge -- %f
    process = git-lfs filter-process
[user]
    name = [INSERT NAME]
    email = [INSERT EMAIL]
[core]
    excludesfile = /Users/[INSERT NAME]/.gitignore_global
[difftool "sourcetree"]
    cmd = opendiff \"$LOCAL\" \"$REMOTE\"
    path =
[mergetool "sourcetree"]
    cmd = /Applications/Sourcetree.app/Contents/Resources/opendiff-w.sh \"$LOCAL\" \"$REMOTE\" -ancestor \"$BASE\" -merge \"$MERGED\"
    trustExitCode = true
[commit]
    template = /Users/[INSERT NAME]/.stCommitMsg
```

### gitignore

``` bash
  **/node_modules/**
  .git
  .DS_Store
  .idea
  npm-debug.log.*
  **/.cache/**
  # Ignore sketch files
  *.sketch
```

### vimrc

``` vim
  syntax on
  set showmatch
  set t_Co=256

  " Use Vim, not Vi
  set nocompatible

  " Use UTF-8 by default
  set encoding=utf-8
  set fileencoding=utf-8

  " Show status line
  set laststatus=2
  set showmode
  set ruler
  set cursorline
```

### zshrc

``` bash
# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:$HOME/.local/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git nvm)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
alias gs="git status"
alias ga="git add ."
alias gpom="git pull --rebase origin main"
alias gl="git log --graph --decorate --oneline"

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

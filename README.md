# klatu
Demo repo... 

## Lerna
Monorepo to avoid having a cluster of repos

### Bootstrap
Runs npm install in all packages and bootstrap relations with symlinks

lerna bootstrap --use-workspaces

lerna run build

To run main locally: 
lerna run dev --scope main --stream

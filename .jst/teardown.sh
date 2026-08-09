#!/usr/bin/env bash
# .jst/teardown.sh — per-worktree teardown hook for markdown-editor
# Runs when a worktree is being removed/cleaned up.
# Idempotent: safe to re-run. Non-zero exit is reported but doesn't block.

set -euo pipefail

# ---------------------------------------------------------------------------
# Environment contract — same as bootstrap.sh
# ---------------------------------------------------------------------------
ISSUE_KEY="${JST_ISSUE_KEY:-$(git branch --show-current | sed -E 's#^[^/]+/([A-Z][A-Z0-9]+-[0-9]+).*#\1#')}"
WORKTREE_DIR="${JST_WORKTREE_DIR:-$(git rev-parse --show-toplevel)}"
BRANCH="${JST_BRANCH:-$(git branch --show-current)}"

cd "$WORKTREE_DIR"

echo "teardown: $ISSUE_KEY on $BRANCH"

# ---------------------------------------------------------------------------
# 1. Remove node_modules to free disk space
# ---------------------------------------------------------------------------
if [ -d "$WORKTREE_DIR/node_modules" ]; then
  echo "teardown: removing node_modules..."
  rm -rf "$WORKTREE_DIR/node_modules"
else
  echo "teardown: node_modules not present"
fi

# ---------------------------------------------------------------------------
# 2. Remove per-worktree .env.local
# ---------------------------------------------------------------------------
if [ -f "$WORKTREE_DIR/.env.local" ]; then
  echo "teardown: removing .env.local..."
  rm -f "$WORKTREE_DIR/.env.local"
else
  echo "teardown: .env.local not present"
fi

# ---------------------------------------------------------------------------
# 3. Remove any vite cache directories
# ---------------------------------------------------------------------------
if [ -d "$WORKTREE_DIR/node_modules/.vite" ]; then
  echo "teardown: removing .vite cache..."
  rm -rf "$WORKTREE_DIR/node_modules/.vite"
fi

echo "teardown: complete"
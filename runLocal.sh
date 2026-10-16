#!/usr/bin/env bash
# Preview the site locally with live reload: ./runLocal.sh [extra mkdocs serve args]
# The venv lives on local disk (VENV, default ~/.cache/rpi-site-venv), not in the repo: on a network
# mount (NFS) installing mkdocs-material's thousands of small files takes minutes instead of seconds.
# It is (re)built on first run and whenever requirements.txt changes.
set -euo pipefail
cd "$(dirname "$0")"
VENV="${VENV:-$HOME/.cache/rpi-site-venv}"

if [ ! -x "$VENV/bin/mkdocs" ] || [ requirements.txt -nt "$VENV/.installed" ]; then
  # (re)create the venv if it's missing or was built without pip
  "$VENV/bin/python" -m pip --version >/dev/null 2>&1 || python3 -m venv --clear "$VENV"
  "$VENV/bin/python" -m pip install -q --upgrade pip
  "$VENV/bin/python" -m pip install -q -r requirements.txt
  touch "$VENV/.installed"
fi

exec "$VENV/bin/mkdocs" serve --dev-addr "${DEV_ADDR:-127.0.0.1:8000}" "$@"

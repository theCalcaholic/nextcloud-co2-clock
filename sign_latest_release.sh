#!/usr/bin/env bash

set -e
tmp_dir="$(mktemp -d)"
wget -q -O "$tmp_dir/co2clock.tar.gz" https://github.com/theCalcaholic/nextcloud-co2-clock/releases/latest/download/co2clock.tar.gz

openssl dgst -sha512 -sign "$HOME/.nextcloud/certificates/co2clock.key" "$tmp_dir/co2clock.tar.gz" | openssl base64


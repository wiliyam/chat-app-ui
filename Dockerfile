FROM envoyproxy/envoy-dev:1423f36b58bf7c375adff72655eb0a5f1afb5f5e

COPY envoy.yaml /etc/envoy/envoy.yaml

CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log

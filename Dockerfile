FROM quay.io/zoro-md-vbot/zoro-md-vbot:latest
RUN git clone https://github.com/zoro-md-vbot/zoro /root/zoro-md-vbot/
WORKDIR /root/zoro-md-vbot/
RUN yarn install --network-concurrency 1
CMD ["npm", "start"]


## sendMessage

```ts
await wa.sendMessage({
	to: "919324612161",
	message: "Have you checked this primeagn video? https://www.youtube.com/watch?v=RlTVMi4JzZA",
	// enableLinkPreview: true,
});
```

`sendMessage` can be used to send simple messages, it takes these parameters

| Param             | Type    | Description                         |
| ----------------- | ------- | ----------------------------------- |
| to                | string  | Phone number                        |
| message           | string  | The message body                    |
| enableLinkPreview | boolean | To make like embed (preview) or not |

`sendMessage` returns a boolean defining success or failure but whether the message is sent to end user on whatsapp or not is not returned, the returned value can be a boolean and the message still won't be sent if the number is not a whatsapp number, etc.
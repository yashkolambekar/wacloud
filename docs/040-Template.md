
```ts
await wa.sendTemplate({
	to: "919324612161",
	language: Language.English,
	name: "testing_template",
	header: Headers.image("https://res.cloudinary.com/dpaigt2bx/image/upload/v1745254113/mka.jpg"),
	data: [
		Parameters.named("customer_name", "John Doe"),
		Parameters.named("officer_name", "Jane Smith"),
	]
});
```

`sendTemplate`  can be used to send message templates

| Param    | Type                | Description                  |
| -------- | ------------------- | ---------------------------- |
| to       | string              | Phone number                 |
| language | Language            | Template language (see 041)  |
| name     | string              | Name of the template         |
| header   | Header              | Header of tempalte (see 031) |
| data     | Array of Parameters | Footer text                  |



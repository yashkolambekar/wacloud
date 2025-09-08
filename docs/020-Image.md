
```ts
await wa.sendImage({
	to: "919324612161",
	imageLink: "https://res.cloudinary.com/dpaigt2bx/image/upload/v1745254113/mka.jpg",
	caption: "BookMyPuja Logo"
});
```

`sendImage` can be used to send images, it takes these parameters

| Param     | Type   | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| to        | string | Phone number                                      |
| imageLink | string | URL of the image, should be publically accessible |
| caption   | string | Caption of the image (kind of the body)           |


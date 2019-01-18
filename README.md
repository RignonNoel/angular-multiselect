# AngularMultiselect

## About

A multiple select component for angular 6.0+ that allow user to manage choices between two list.

## Getting started

First install through npm:

```
npm install --save @rignonnoel/angular-multiselect
```

Finally import `MultiselectModule` into your app module:

```
import {MultiselectModule} from 'angular-multiselect';

@NgModule({
  imports: [
    MultiselectModule
  ]
})
export class MyModule {}
```


## How to publish a new official version on npmjs

First create a new build of the package:

```
npm run packagr
```

Finally publish it on npmjs:

```
npm publish dist --access public
```

## License

MIT

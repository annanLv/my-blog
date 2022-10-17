本文只对常用的ts语法进行推荐,其他的语法根据自己需要,自行学习剖析

## **安装**

使用npm全局安装typescript

(如果出现报错，大概率是因为权限不够导致的，使用管理员权限进行安装)

```

npm i -g typescript

```

------

## **运行**

将ts文件生成为对应的js文件

(node无法直接运行ts文件，所以如果用node运行，要用下面的命令先生成js文,如针对test.ts使用如下命令，可自动生成test.js的文件)

```js

tsc test.ts

```

node运行ts文件

```js

ts-node test.ts

```

------

## **简单数据类型**

简单数据类型number约束

```ts

let decimal: number = 6;

```

简单数据类型boolean约束

```ts

let isDone: boolean = false;

```

简单数据类型string约束

```ts

let color: string = "blue";

```

------

## **任意类型或未知**

any数据类型,慎用,一般不推荐使用,使用any会失去类型校验

```ts

let d: any = 4;

```

unknown数据类型,可以理解为安全的any,不推荐使用

```ts

let notSure: unknown = 4;

```

------

## **复杂类型**

复杂类型数组校验

```ts

let list: number[] = [1, 2, 3];

```

enum,枚举，TS中新增类型

```js

enum Color {

  Red,

  Green,

  Blue,

}

let c: Color = Color.Green;

```

void类型,多用于函数无返回值的情况

```ts

function handleAdd(num1:number,num2:number):void {

	this.sum =num1+num2

}

```

定义对象其余所有参数,如下,obj里除name为string外,其余参数键为字符串,值为number类型

```ts

let obj:{name:string,[propName:string]:number}

```

------

## 类型断言

对于一个数据,可能为多个类型或者未知类型的时候,但是我们只需要特定的类型的属性时,进行断言,断定为我们需要的类型

```ts

let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;

```

------

## **类class** (用到的开发场景不多,建议只做了解)

定义类

```js

class 类名 {

	属性名: 类型;
	
	constructor(参数: 类型){

		this.属性名 = 参数;

	}
	
	方法名(){

		....

	}

}

```

示例:

```ts

class Person{

    /*

     * public（默认值），可以在类、子类和对象中修改,可省略

     * protected ，可以在类、子类中修改

     * private ，可以在类中修改

     */

  public name: string;

  public age: number;

    constructor(name: string, age: number){

        this.name = name;

        this.age = age;

    }

    sayHello(){

        console.log(`大家好，我是${this.name}`);

    }

}

//继承

class Employee extends Person{

    constructor(name: string, age: number){

        super(name, age);

        this.name = name; //只有父类数据为public或者protected,子类中可以修改父类数据

    }

}

//使用类

const p = new Person('孙悟空', 18);

p.sayHello();

```

抽象类

抽象类是专门用来被其他类所继承的类，它只能被其他类所继承不能用来创建实例

使用abstract开头的方法叫做抽象方法，抽象方法没有方法体只能定义在抽象类中，继承抽象类时抽象方法必须要实现

```ts

abstract class Animal{

    abstract run(): void;

    bark(){

        console.log('动物在叫~');

    }

}

class Dog extends Animals{

    run(){

        console.log('狗在跑~');

    }

}

```

------

## **接口（Interface）**

示例（检查对象类型）：

```ts

interface Person{

    name: string;

    sayHello():void;

}

function fn(per: Person){

    per.sayHello();

}

fn({

  name:'孙悟空', 

  sayHello:function() { 

    console.log(`Hello, 我是 ${this.name}`) 

  } 

});

```

------

## type 自定义数据类型

```ts

type myType = string|number;

type menuListType={

	menuId:number;

	meuName:syring

}

interface dataType {

	menuList:menuListType[]

}

let m:myType

const data:dataType = {

	menuList:[],

	userInfo:[]

}

```

------

## 泛型（Generic）

定义一个函数或类时，有些情况下无法确定其中要使用的具体类型（返回值、参数、属性的类型不能确定），此时泛型便能够发挥作用。

这里的```<T,K>```就是泛型，T是我们给这个类型起的名字（不一定非叫T或者K），设置泛型后即可在函数中使用T或者K来表示该类型。所以泛型其实很好理解，就表示某个类型。即:传入的是什么类型,那泛型就是什么类型

```ts

function test<T, K>(a: T, b: K): K{

    return b;

}

test<number, string>(10, "hello");

```

除此之外，也可以对泛型的范围进行约束

使用T extends MyInter表示泛型T必须是MyInter的子类，不一定非要使用接口类,抽象类同样适用。

```ts

interface MyInter{

    length: number;

}

function test<T extends MyInter>(arg: T): number{

    return arg.length;

}

```

------

## 以下为TS+vue3的部分开发语法

ts+ref

```ts

const show = ref<boolean>(false);

或者

const show:boolean = ref(false);

```

ts+reactive

```ts

type menuListType={

	menuId:number;

	meuName:syring

}

interface dataType {

	menuList:menuListType[]

}

const data =reactive<dataType>({

	menuList:[],

	userInfo:[]

})

或者

const data:dataType =reactive({

	menuList:[],

	userInfo:[]

})

```

获取组件 ref 实例+ts

使用 vue3 和 ts 时，为了获取 组件 ref 实例，就需要在 ref 函数的泛型中指定类型。如何获取组件的类型呢？vue 官方文档中 TypeScript 支持里已经告诉我们了一个获取组件类型的方法，InstanceType<typeof 组件名称>，使用方式如下：

```const $userForm = ref<InstanceType<typeof userForm>>();```

ts ref实例

````ts

//子组件

<NewsDialog ref="news" @refreshData="getList()"></NewsDialog>

//导入子组件

import NewsDialog from './components/NewsDialog.vue'

//获取子组件实例

const news = ref<InstanceType<typeof NewsDialog>>()            

//打开消息弹窗

const openNewsDialog = (): void => {

  news.value?.showDialog()

}

````

获取一般ref实例

```ts

//input标签 

<input

  type="text"

  class="search"

  ref="input"

  v-model="inputValue"

  placeholder="队伍名称最多6个字"

  maxlength="6"

/>
 
const input = ref<HTMLElement | null>(null); 

//获取焦点

(input.value as HTMLInputElement).focus();

```

ts结合emit使用

```ts

//之前的写法

const emit = defineEmits(['change', 'update'])

//ts写法

const emit = defineEmits<{

	(e:'change'):void,

	(e:'update',value:string):void

}>

```

ts结合prop使用

```ts

//之前的写法

const prop = defineProps({

    id:{

        type:Number,

        default:0

    }

})

//ts写法

interface PropType = {

    id:number

}

const prop = defineProps<PropType>()

```



------

## TS中常用的高级类型

**Partial**集体可选(将类型定义的所有属性都修改为可选。)

```ts

  checkInData: Partial<{

    today_sign: number;

    series_days: number;

  }>;
  
  上面的代码相当于

   checkInData:{

    today_sign?: number;

    series_days?: number;

  } 
  
```

**Record** 简单对象键值对,所有类型指定

以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填。

```ts

//示例1,对象的键必须为'x'或者'y',键值必须为数字类型:

type Coord = Record<'x' | 'y', number>;

// 等同于

type Coord = {

	x: number;

	y: number;

}

```

```ts

//示例2:

//activity对象,第一个参数为key,必须为字符串,第二个参数为key值,必须为数字

activity: Record<string, number>;

```

**Readonly** 将所有属性定义为只读

```ts

type Coord = Readonly<Record<'x' | 'y', number>>;

// 等同于

type Coord = {

    readonly x: number;

    readonly y: number;

}

// 如果进行了修改，则会报错：

const c: Coord = { x: 1, y: 1 };

c.x = 2; // Error: Cannot assign to 'x' because it is a read-only property.

```

**pick** 选取部分类型校验

如下:CoordX选取了Coord中的x组成一个新的type数据类型校验

```ts

type Coord = Record<'x' | 'y', number>;

type CoordX = Pick<Coord, 'x'>;

// 等用于

type CoordX = {

	x: number;

}

```

------

tips:以下作为了解,当我们使用**vant**组件库官方推荐的自动引入组件的方法时需注意:

Vant 中有个别组件是以函数的形式提供的，包括 Toast，Dialog，Notify 和 ImagePreview 组件。在使用函数组件时，unplugin-vue-components 无法自动引入对应的样式，因此需要在需要的页面里手动引入样式。

```ts

import { Dialog } from 'vant';

const VanDialog = Dialog.Component;

```

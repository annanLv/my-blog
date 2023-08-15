# 计算属性 computed

- 模板中放入太多的逻辑会让模板过重且难以维护  使用计算属性可以让模板更加的简洁
- **计算属性是基于它们的响应式依赖进行缓存的**
- computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化

```html
 <div id="app">
     <!--  
        当多次调用 reverseString  的时候 
        只要里面的 num 值不改变 他会把第一次计算的结果直接返回
		直到data 中的num值改变 计算属性才会重新发生计算
     -->
    <div>{{reverseString}}</div>
    <div>{{reverseString}}</div>
     <!-- 调用methods中的方法的时候  他每次会重新调用 -->
    <div>{{reverseMessage()}}</div>
    <div>{{reverseMessage()}}</div>
  </div>
  <script type="text/javascript">
    /*
      计算属性与方法的区别:计算属性是基于依赖进行缓存的，而方法不缓存
    */
    var vm = new Vue({
      el: '#app',
      data: {
        msg: 'Nihao',
        num: 100
      },
      methods: {
        reverseMessage: function(){
          console.log('methods')
          return this.msg.split('').reverse().join('');
        }
      },
      //computed  属性 定义 和 data 已经 methods 平级 
      computed: {
        //  reverseString   这个是我们自己定义的名字 
        reverseString: function(){
          console.log('computed')
          var total = 0;
          //  当data 中的 num 的值改变的时候  reverseString  会自动发生计算  
          for(var i=0;i<=this.num;i++){
            total += i;
          }
          // 这里一定要有return 否则 调用 reverseString 的 时候无法拿到结果    
          return total;
        }
      }
    });
  </script>
```

## Vue计算属性和方法的区别

### methods 方法

> 当修改其中一个属性时, 其他属性的值都没改变, 但会发现 `methods` 里的方法都被执行

### computed 计算属性

> 当修改其中一个值的时候, 只会执行于其相关的方法


::: tip 总结

1. `methods方法` 和 `computed计算属性`, 俩种方法的最终结果确实是完全相同
2. 不同的是计算属性是基于它们的响应式依赖进行缓存的
    + 只在相关响应式依赖发生改变时, 才会重新求值, 多次访问 计算属性会立即返回之前的计算结果, 而不必再次执行函数
3. `methods方法`, 每当触发重新渲染时, 调用方法将总会再次执行函数.
4. 对于任何复杂逻辑, 你都应当使用计算属性.

:::


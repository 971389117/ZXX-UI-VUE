# collapse

<ZXCollapse></ZXCollapse>

```html
<!--只有一个展开标签-->
<z-collapse single :selected.sync="selectedCop">
  <z-collapse-item name="1" title="标题1">内容超级多,随便写1</z-collapse-item>
  <z-collapse-item name="2" title="标题2">内容超级多,随便写2</z-collapse-item>
  <z-collapse-item name="3" title="标题3">内容超级多,随便写3</z-collapse-item>
</z-collapse>

<!--可以多个展开标签-->
<z-collapse :selected.sync="selectedCop">
  <z-collapse-item name="1" title="标题1">内容超级多,随便写1</z-collapse-item>
  <z-collapse-item name="2" title="标题2">内容超级多,随便写2</z-collapse-item>
  <z-collapse-item name="3" title="标题3">内容超级多,随便写3</z-collapse-item>
</z-collapse>

<script>
export default {
  data() {
    return {
        selectedCop:['1']
    }
  }
}
</script>
```
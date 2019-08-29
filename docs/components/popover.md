# popover

<ZXPopover></ZXPopover>

```html
<!--悬浮-->
<z-popover trigger="hover">
    <template v-slot:content>
        <div>哈哈哈 内容智商</div>
    </template>
    <z-button>点我</z-button>
</z-popover>

<!--点击-->
<z-popover position="right">
    <template v-slot:content>哈哈哈 内容智商</template>
    <z-button>点我</z-button>
</z-popover>
```
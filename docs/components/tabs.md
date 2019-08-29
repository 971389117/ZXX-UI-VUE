# Tabs

<ZXTabs></ZXTabs>  

```html
<z-tabs :selected.sync="selectedTab" @update:selected="yyy">
    <z-tabs-head>
        <template slot="actions">
            <button>设置</button>
        </template>
        <z-tabs-item name="woman">
            <i name="settings"></i>美女
        </z-tabs-item>
        <z-tabs-item name="finance" disabled>
            财经
        </z-tabs-item>
        <z-tabs-item name="sports">
            体育
        </z-tabs-item>
    </z-tabs-head>
    <z-tabs-body>
        <z-tabs-pane name="woman">
            美女相关资讯
        </z-tabs-pane>
        <z-tabs-pane name="finance">
            财经相关资讯
        </z-tabs-pane>
        <z-tabs-pane name="sports">
            体育相关资讯
        </z-tabs-pane>
    </z-tabs-body>
</z-tabs>
```

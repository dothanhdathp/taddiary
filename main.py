def define_env(env):
    @env.macro
    def book_card(title, img_path, mdlink, description):
        return f'''
<div class="grid cards" markdown><div class="grid-item" style="text-align: center; width: 20%;" markdown>
    
[![{title}]({img_path}){{.small-icon}}](mdlink)
    
</div><div class="grid-item" style="text-align: left; width: 70%;" markdown>
    
#### {title}

{description}

</div>
</div>
'''
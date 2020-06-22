<template>
    <!--カスタムディレクテティブ名:引数.修飾子="object" -->
    <p v-border:solid.round.shadow="{width: '3px', borderColor: 'black', color: 'red'}">cutom directive</p>
</template>

<script>
export default {
    // local custom directive
    directives: {
        border(el, binding) {
            el.style.color = binding.value.color;
            el.style.borderColor = binding.value.borderColor;
            el.style.borderWidth = binding.value.width;
            // 引数を設定する（v-borderの後ろ、「:solid」の部分）。1つしか設定できない。
            el.style.borderStyle = binding.arg;
            // 修飾子を設定する。:solidの後ろ「.round」[.shadow]部分。いくつでも設定可能。modifiersが修飾子の意味。
            if(binding.modifiers.round) {
                el.style.borderRadius = "0.5rem";
            }
            if(binding.modifiers.shadow) {
                el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0,26)";
            }
        }
    }
}
</script>
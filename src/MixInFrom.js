export const mixInFrom = {
    // export defaultの中身（data, componentsとか）のことを総称してoptionと呼ぶ。
    // 共通できるoptionをコンポーネント間で共有するためにまとめるのがMix in
    data() {
        return {
            globalFilter: "global filter",
            localFilter: "local filter"
        }
    },
    // local filter
    filters: {
        // 関数名(引数)の形
        lowerCase(value) {
            return value.toLowerCase();
        },
    }
}
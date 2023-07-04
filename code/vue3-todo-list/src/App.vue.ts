/* __vue_virtual_code_placeholder__ */

import TodoList from './components/TodoList.vue';
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {
};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {
};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & __VLS_GlobalComponents;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots })>;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {}
& __VLS_WithComponent<'div', typeof __VLS_components, "Div", "div", "div">
& __VLS_WithComponent<'TodoList', typeof __VLS_components, "TodoList", "TodoList", "TodoList">
;
__VLS_components.Div;__VLS_components.Div;__VLS_templateComponents.div;__VLS_templateComponents.div;
// @ts-ignore
[div,div,];
__VLS_templateComponents.TodoList;__VLS_templateComponents.TodoList;
// @ts-ignore
[TodoList,TodoList,];
{
const __VLS_0 = __VLS_templateComponents['div'];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({...{ }, }));
__VLS_templateComponents.div;
__VLS_templateComponents.div;
const __VLS_2 = __VLS_1({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = __VLS_templateComponents['TodoList'];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({...{ }, }));
__VLS_templateComponents.TodoList;
__VLS_templateComponents.TodoList;
const __VLS_6 = __VLS_5({ ...{ }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!:{
};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
TodoList: TodoList,
};
},
});
export default {} as typeof __VLS_publicComponent;


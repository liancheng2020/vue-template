import { Component, Vue } from 'vue-property-decorator'
import { debounce } from 'ts-debounce'

@Component({
  components: {}
})
export default class BasicForm extends Vue {
  debounceSubmit = debounce(this.doSubmit, 300) // 300ms后执行

  form = {
    // form表单绑定的内容
    code: '', // 门店code
    name: '', // 门店名称
    contacts: '', // 门店联系人
    mobile: '', // 门店手机号
    type: '', // 门店类型
    address: '' // 门店地址
  }

  optionList = [
    {
      // 下拉框选项
      uuid: '232423543645756',
      // 联系人
      name: '张三',
      // 联系人电话
      mobile: '11554546564',
      // 是否设为默认
      isDefault: true
    },
    {
      uuid: '23242354362226',
      // 联系人
      name: '李四',
      // 联系人电话
      mobile: '155666555555',
      // 是否设为默认
      isDefault: false
    }
  ]

  rules = {
    code: [{ required: true, message: '请输入门店编码', trigger: 'blur' }],
    name: [{ required: true, message: '请输入门店名称', trigger: 'blur' }],
    contacts: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
    mobile: [{ required: false, message: '请输入联系方式', trigger: 'blur' }],
    type: [{ required: true, message: '请选择门店类型', trigger: 'blur' }],
    address: [{ required: false, message: '请选择门店地址', trigger: 'blur' }]
  }

  /**
   * 提价
   */
  doSubmit() {
    //
  }

  /**
   * 后退
   */
  doBack() {
    this.$router.go(-1)
  }
}

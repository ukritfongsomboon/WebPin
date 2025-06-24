export default {
  data () {
    return {
      Err: {
        noInPut: 'กรุณากรอกข้อมูล',
        noNull: 'กรุณาเลือกข้อมูล',
        noArray: 'กรุณาเลือกข้อมูล',
        numberOnly: 'กรุณากรอกตัวเลขเท่านั้น',
        noSpace: 'ห้ามมีช่องว่าง',
        phoneNumber: 'กรุณากรอกหมายเลขโทรศัพท์มือถือ 10 หลัก',
        english: 'ภาษาอังกฤษเท่านั้น',
        email: 'รูปแบบอีเมลไม่ถูกต้อง',
        countingNumber: 'กรุณากรอกตัวเลข 0 - 9999',
        float: 'กรุณากรอกตัวเลขเท่านั้น'
      },
      Regx: {
        UUID: '',
        CID: '',
        number: /^\d+$/,
        space: /^\S+$/,
        english: /[^A-Za-z0-9@!_.-]/,
        email: /^\S+@\S+\.\S+$/,
        countingNumber: /^(?:[1-9]\d{0,4})$/,
        float: /^([+-]?([0-9]*[.])?[0-9]+)$/
      },
      Rule: {
        noInPut: (v) => this.isEmpty(v) || this.Err.noInPut,
        notNull: (v) => this.isNull(v) || this.Err.noNull,
        noArray: (v) => this.isArray(v) || this.Err.noArray,
        noSpace: (v) => this.isSpace(v) || this.Err.noSpace,
        numberOnly: (v) => this.isNumber(v) || this.Err.numberOnly,
        phoneNumber: (v) => this.isPhoneNumber(v) || this.Err.phoneNumber,
        englishOnly: (v) => this.isEnglish(v) || this.Err.english,
        emailOnly: (v) => this.isEmail(v) || this.Err.email,
        countingNumberOnly: (v) =>
          this.isCountingNumber(v) || this.Err.countingNumber,
        countingFloatOnly: (v) => this.isCountingFloat(v) || this.Err.float
      }
    }
  },
  methods: {
    // NOTE Rule function
    returncommaNumber (val, index = 2) {
      const checkDecimal = val % 1
      if (checkDecimal === 0) {
        return parseInt(val).toLocaleString('en-US')
      } else {
        if (index === 0) {
          const valNew = Math.round(val)
          return parseInt(valNew).toLocaleString('es-US')
        } else {
          const valNew = val.toFixed(index)
          const parts = valNew.toString().split('.')
          let numberPart = parts[0]
          const decimalPart = parts[1]
          numberPart = parseInt(numberPart).toLocaleString('es-US')
          return numberPart + '.' + decimalPart
        }
      }
    },
    returncommaNumberDecimal (val, index = 2) {
      if (index === 0) {
        const valNew = Math.round(val)
        return parseInt(valNew).toLocaleString('es-US')
      } else {
        const valNew = val.toFixed(index)
        const parts = valNew.toString().split('.')
        let numberPart = parts[0]
        const decimalPart = parts[1]
        numberPart = parseInt(numberPart).toLocaleString('es-US')
        return numberPart + '.' + decimalPart
      }
    },
    returncommaNumberPayment (val, index = 0) {
      if (index === 0) {
        const valNew = Math.round(val)
        return parseInt(valNew).toLocaleString('es-US')
      } else if (index === null) {
        const valNew = val
        const checkDecimal = val % 1
        if (checkDecimal === 0) {
          const parts = valNew.toString().split('.')
          let numberPart = parts[0]
          const decimalPart = '00'
          numberPart = parseInt(numberPart).toLocaleString('es-US')
          return numberPart + '.' + decimalPart
        } else {
          const parts = valNew.toString().split('.')
          let numberPart = parts[0]
          const decimalPart = parts[1]
          numberPart = parseInt(numberPart).toLocaleString('es-US')
          return numberPart + '.' + decimalPart
        }
      } else {
        const checkDecimal = val % 1
        if (checkDecimal === 0) {
          const valNew = val.toFixed(index)
          const parts = valNew.toString().split('.')
          let numberPart = parts[0]
          const decimalPart = parts[1]
          numberPart = parseInt(numberPart).toLocaleString('es-US')
          return numberPart + '.' + decimalPart
        } else {
          const valNew = val.toFixed(index)
          const parts = valNew.toString().split('.')
          let numberPart = parts[0]
          const decimalPart = parts[1]
          numberPart = parseInt(numberPart).toLocaleString('es-US')
          return numberPart + '.' + decimalPart
        }
      }
    },
    // returntoFixed (val, index = 2) {
    //   const valNew = val.toFixed(index)
    //   const parts = valNew.toString().split('.')
    //   let numberPart = parts[0]
    //   const decimalPart = parts[1]
    //   numberPart = parseInt(numberPart).toLocaleString('es-US')
    //   return numberPart + '.' + decimalPart
    // },
    returntoFixed (val, index = 2) {
      if (index > 0) {
        const valNew = val.toFixed(index)
        const parts = valNew.toString().split('.')
        let numberPart = parts[0]
        const decimalPart = parts[1]
        numberPart = parseInt(numberPart).toLocaleString('es-US')
        return numberPart + '.' + decimalPart
      } else {
        return parseInt(val).toLocaleString('es-US')
      }
    },
    isEmpty (str) {
      return !!str
    },
    isNull (str) {
      return str !== null
    },
    isArray (str) {
      return str != null && str.length !== 0
    },
    isSpace (str) {
      return this.Regx.space.test(str)
    },
    isNumber (str) {
      return this.Regx.number.test(str)
    },
    isPhoneNumber (str) {
      return str !== null && str.length === 10
    },
    isEnglish (str) {
      return !this.Regx.english.test(str)
    },
    isEmail (str) {
      return this.Regx.email.test(str)
    },
    isCountingNumber (str) {
      return this.Regx.countingNumber.test(str)
    },
    isCountingFloat (str) {
      return this.Regx.float.test(str)
    },
    async awaitAxios (options) {
      try {
        const res = await this.axios(options)
        return res.data
      } catch (error) {
        if (error.data !== undefined) return error.data
        else {
          return { code: 400, message: 'Bad Request', data: {}, status: false }
        }
      }
    },
    async loginAdminPage (payload) {
      const params = {
        ...{
          // Edit Constructure here
          username: '',
          password: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/signin`,
        method: 'post',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async initPermission () {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/permissions/dropdown`,
        method: 'get'
      }
      return await this.awaitAxios(options)
    },
    async initUserMenu () {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/menus/navigation`,
        method: 'get'
      }
      return await this.awaitAxios(options)
    },
    async initUserInfo () {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/user/info`,
        method: 'get'
      }
      return await this.awaitAxios(options)
    },
    async initUserTable (payload) {
      const params = {
        ...{
          // Edit Constructure here
          page: 1,
          row: 100,
          verify: 2,
          keyword: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/users`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async createUser (payload) {
      const params = {
        ...{
          // Edit Constructure here
          name_title: '',
          first_name: '',
          last_name: '',
          phone: '',
          gender: '',
          username: '',
          permissions: [],
          image: '',
          email_verify: '',
          date_of_birth: '',
          street: '',
          zip_code: '',
          city: '',
          country_code: '',
          country: '',
          time_zone: 'UTC',
          description: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/user`,
        method: 'post',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async updateUser (payload) {
      payload.date_of_birth = this.$moment(payload.date_of_birth)
        .startOf('day')
        .utc()
        .format('YYYY-MM-DD HH:mm:ss')
      // delete payload.phone
      const params = {
        ...{
          // Edit Constructure here
          name_title: '',
          first_name: '',
          last_name: '',
          // phone: '',
          gender: '',
          username: '',
          permissions: [],
          image: '',
          email_verify: '',
          date_of_birth: '',
          street: '',
          zip_code: '',
          city: '',
          country_code: '',
          country: '',
          time_zone: 'UTC',
          description: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/user/${payload.user_id}`,
        method: 'put',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async deleteUser (payload) {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/user/${payload.user_id}`,
        method: 'delete'
      }
      return await this.awaitAxios(options)
    },
    async sendEmailresetPasswordUser (payload) {
      const params = {
        ...{
          // Edit Constructure here
          email: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/user/password/reset`,
        method: 'post',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async resetPasswordAdmin (payload) {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/user/${payload.user_id}/password/reset`,
        method: 'post',
        data: { password: payload.password }
      }
      return await this.awaitAxios(options)
    },
    async resetPassword (payload) {
      const data = {
        ...{
          // Edit Constructure here
          password: ''
        },
        ...payload
      }
      // NOTE this function signin
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/user/password/new`,
        method: 'post',
        data: data
      }
      return await this.awaitAxios(options)
    },
    async getUserTeam (payload) {
      const params = {
        ...{
          // Edit Constructure here
          page: 1,
          row: 100,
          keyword: '',
          tags: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/executives`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async getTableUserTeamAuth (payload) {
      const params = {
        ...{
          // Edit Constructure here
          page: 1,
          row: 100,
          keyword: '',
          tags: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/executives/auth`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async getUserTeamItemOnInGroup (payload) {
      const params = {
        ...{
          // Edit Constructure here
          page: 1,
          row: 100,
          keyword: '',
          tags: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/executive/exists/tags`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async getFileDownload (payload) {
      const params = {
        ...{
          // Edit Constructure here
          page: 1,
          row: 10,
          keyword: '',
          tags: []
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/files`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async getList (payload) {
      const params = {
        ...{
          // Edit Constructure here
          page: 1,
          row: 10,
          keyword: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/lists`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async getNews (payload) {
      const params = {
        ...{
          // Edit Constructure here
          keyword: '',
          page: 1,
          row: 10,
          tags: '',
          news_id: '',
          sort_by: 'show_date',
          status: true,
          show_only: true
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/news`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async createNews (payload) {
      payload.show_date = this.$moment(payload.show_date)
        .startOf('day')
        .utc()
        .format()
      const params = {
        ...{
          // Edit Constructure here
          banner: '',
          title_th: '',
          title_eng: '',
          description_th: '',
          description_eng: '',
          tags: [],
          status: false,
          show_date: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/news`,
        method: 'post',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async updateNews (payload) {
      payload.show_date = this.$moment(payload.show_date)
        .startOf('day')
        .utc()
        .format()
      const params = {
        ...{
          // Edit Constructure here
          banner: '',
          title_th: '',
          title_eng: '',
          description_th: '',
          description_eng: '',
          tags: [],
          status: false,
          show_date: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/news/${payload.news_id}`,
        method: 'put',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async deleteNews (payload) {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/news/${payload.news_id}`,
        method: 'delete'
      }
      return await this.awaitAxios(options)
    },
    async getStock () {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/stock`,
        method: 'get'
      }
      return await this.awaitAxios(options)
    },
    async createStats (payload) {
      const params = {
        ...{
          // Edit Constructure here
          path: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/stats`,
        method: 'post',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async getStats (payload) {
      const params = {
        ...{
          // Edit Constructure here
          keyword: '',
          page: 1,
          row: 10
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/stats/total`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async getStatsByAction (payload) {
      payload.start_date = this.$moment(payload.start_date)
        .startOf('day')
        .utc()
        .format('YYYY-MM-DD HH:mm:ss')
      payload.end_date = this.$moment(payload.end_date)
        .endOf('day')
        .utc()
        .format('YYYY-MM-DD HH:mm:ss')
      const params = {
        ...{
          // Edit Constructure here
          start_date: '',
          end_date: '',
          keyword: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/stats/${params.action}`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async uploadFile (payload) {
      const profile = new FormData()
      profile.append('file', payload.file)
      profile.append('title', payload.title)
      profile.append('description', payload.description)
      profile.append('tags', payload.tags)
      profile.append('index', 0)

      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/file`,
        method: 'post',
        data: profile
      }
      return await this.awaitAxios(options)
    },
    async deleteFile (payload) {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/file/${payload.file_id}`,
        method: 'delete'
      }
      return await this.awaitAxios(options)
    },
    async addProfile (payload) {
      payload.stock.ratio = payload.stock.ratio.toString()
      payload.stock.volume = payload.stock.volume.toString()
      payload.profile.date_of_birth = this.$moment(
        payload.profile.date_of_birth
      )
        .utc()
        .format('YYYY-MM-DD HH:mm:ss')
      for (let index = 0; index < payload.positions.length; index++) {
        payload.positions[index].start_date = this.$moment(
          payload.positions[index].start_date
        )
          .utc()
          .format('YYYY-MM-DD HH:mm:ss')
      }
      const params = {
        ...{
          profile: {
            firstname_th: '',
            firstname_eng: '',
            lastname_th: '',
            lastname_eng: '',
            date_of_birth: '',
            image: '',
            educationals: [
              {
                title_eng: '',
                title_th: '',
                start_date: '',
                end_date: '',
                description_eng: '',
                description_th: ''
              }
            ],
            relationship: {
              executive: false
            }
          },
          group_tags: [],
          positions: [
            {
              title_eng: '',
              title_th: '',
              description_eng: '',
              description_th: '',
              start_date: '',
              end_date: '',
              position_tags: []
            }
          ],
          stock: {
            volume: 0,
            ratio: 0
          },
          status: true
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/executive`,
        method: 'post',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async editProfile (payload) {
      payload.stock.ratio = payload.stock.ratio.toString()
      payload.stock.volume = payload.stock.volume.toString()
      payload.profile.date_of_birth = this.$moment(
        payload.profile.date_of_birth
      )
        .utc()
        .format('YYYY-MM-DD HH:mm:ss')
      for (let index = 0; index < payload.positions.length; index++) {
        payload.positions[index].start_date = this.$moment(
          payload.positions[index].start_date
        )
          .utc()
          .format('YYYY-MM-DD HH:mm:ss')
        payload.positions[index].end_date = this.$moment(
          payload.positions[index].end_date
        )
          .utc()
          .format('YYYY-MM-DD HH:mm:ss')
      }
      for (
        let index = 0;
        index < payload.profile.educationals.length;
        index++
      ) {
        payload.profile.educationals[index].end_date = this.$moment(
          payload.profile.educationals[index].end_date
        )
          .utc()
          .format('YYYY-MM-DD HH:mm:ss')
        payload.profile.educationals[index].start_date = this.$moment(
          payload.profile.educationals[index].start_date
        )
          .utc()
          .format('YYYY-MM-DD HH:mm:ss')
      }
      const params = {
        ...{
          profile: {
            firstname_th: '',
            firstname_eng: '',
            lastname_th: '',
            lastname_eng: '',
            date_of_birth: '',
            image: '',
            educationals: [
              {
                title_eng: '',
                title_th: '',
                start_date: '',
                end_date: '',
                description_eng: '',
                description_th: ''
              }
            ],
            relationship: {
              executive: false
            }
          },
          group_tags: [],
          positions: [
            {
              title_eng: '',
              title_th: '',
              description_eng: '',
              description_th: '',
              start_date: '',
              end_date: '',
              position_tags: []
            }
          ],
          stock: {
            volume: 0,
            ratio: 0
          },
          status: true
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/executive/${payload.profile_id}`,
        method: 'put',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async deletePersionFromTeam (payload) {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/executive/${payload.profile_id}`,
        method: 'delete'
      }
      return await this.awaitAxios(options)
    },
    async createList (payload) {
      const params = {
        ...{
          // Edit Constructure here
          title_th: '',
          title_eng: '',
          description_th: '',
          description_eng: '',
          type: '',
          file_th: '',
          file_eng: '',
          banner_th: '',
          banner_eng: '',
          status: true,
          verify: 0,
          edit_date: '',
          items: []
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/list`,
        method: 'post',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async updateList (payload) {
      const params = {
        ...{
          // Edit Constructure here
          title_th: '',
          title_eng: '',
          description_th: '',
          description_eng: '',
          type: '',
          file_th: '',
          file_eng: '',
          banner_th: '',
          banner_eng: '',
          status: true,
          verify: 0,
          edit_date: '',
          items: []
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/list/${params.list_id}`,
        method: 'put',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async getAnnouncerToDay () {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/announcers/today`,
        method: 'get'
      }
      return await this.awaitAxios(options)
    },
    async getAnnouncerTable (payload) {
      const params = {
        ...{
          // Edit Constructure here
          keyword: '',
          page: 1,
          row: 10
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/announcers`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async createAnnounce (payload) {
      payload.start_date = this.$moment(payload.start_date)
        .startOf('day')
        .utc()
        .format('YYYY-MM-DD HH:mm:ss')
      payload.end_date = this.$moment(payload.end_date)
        .endOf('day')
        .utc()
        .format('YYYY-MM-DD HH:mm:ss')
      const params = {
        ...{
          // Edit Constructure here
          start_date: '',
          end_date: '',
          title_eng: '',
          title_th: '',
          description_th: '',
          description_eng: '',
          image: '',
          url: '',
          icon: 'UTC',
          time_zone: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/announcer`,
        method: 'post',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async updateAnnounce (payload) {
      payload.start_date = this.$moment(payload.start_date)
        .startOf('day')
        .utc()
        .format('YYYY-MM-DD HH:mm:ss')
      payload.end_date = this.$moment(payload.end_date)
        .endOf('day')
        .utc()
        .format('YYYY-MM-DD HH:mm:ss')
      const params = {
        ...{
          // Edit Constructure here
          start_date: '',
          end_date: '',
          title_eng: '',
          title_th: '',
          description_th: '',
          description_eng: '',
          image: '',
          url: '',
          icon: 'UTC',
          time_zone: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/announcer/${payload.announcer_id}`,
        method: 'put',
        data: params
      }
      return await this.awaitAxios(options)
    },
    async deleteAnnounce (payload) {
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/announcer/${payload.announcer_id}`,
        method: 'delete'
      }
      return await this.awaitAxios(options)
    },
    // table
    async getItemsTable (payload) {
      const params = {
        ...{
          // Edit Constructure here
          page: 1,
          row: 999,
          keyword: ''
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/tables`,
        method: 'get',
        params: params
      }
      return await this.awaitAxios(options)
    },
    async updateItemsTable (payload) {
      const data = {
        ...{
          // Edit Constructure here
          title_th: 1,
          title_eng: 999,
          description_th: '',
          description_eng: '',
          configs: {
            rowperpage: 10
          },
          headers: [],
          datas: []
        },
        ...payload
      }
      const options = {
        url: `${process.env.VUE_APP_API}/api/v1/table/${payload.table_id}`,
        method: 'put',
        data: data
      }
      return await this.awaitAxios(options)
    }
  }
}

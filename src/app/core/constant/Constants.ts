export const Constants = {
  API_URL: "https://freeapi.miniprojectideas.com/api/TicketsNew/",
  LOGIN_METHOD:"Login",
  DEPARTMENT_METHODS :{
    GET_DEPARTMENTS: "GetDepartments",
    CREATE_DEPARTMENT: "CreateDepartment",
    UPDATE_DEPARTMENT: "UpdateDepartment",
    DELETE_DEPARTMENT_BY_ID: "DeleteDepartment?id="
  },
  PARENT_CATEGORY_METHODS:{
    GET_PARENT_CATEGORY: "GetParentCategory",
    CREATE_PARENT_CATEGORY: "CreateParentCategory",
    UPDATE_PARENT_CATEGORY: "UpdateParentCategory",
    DELETE_PARENT_CATEGORY_BY_ID: "DeleteParentCategory?id="
  },
  CHILD_CATEGORY_METHODS:{
    GET_CHILD_CATEGORY: "GetChildCategory",
    GET_CHILD_CATEGORY_BY_PARENT_ID: "GetChildCategoryByParentId?id=",
    CREATE_CHILD_CATEGORY: "CreateChildCategory",
    UPDATE_CHILD_CATEGORY: "UpdateChildCategory",
    DELETE_CHILD_CATEGORY_BY_ID: "DeleteChildCategory?id="
  }
}
export interface INavChildObj {
  menuItem: {
    id: number;
    active: boolean;
    text: string;
    url: string;
    labIds: Number[];
    roleIds: Number[];
  };
}

export interface INavItems {
  parentMenu: {
    parentMenuId: number;
    active: boolean;
    title: string;
    url: string;
    labIds: Number[];
    roleIds: Number[];
    childMenus: INavChildObjEnum;
  };
}

export interface INavChildObjEnum extends Array<INavChildObj> {}

export interface INavItemsEnum extends Array<INavItems> {}

export interface INavHasChildrenObj {
  hasChildren: boolean;
  children: INavChildObjEnum;
}

export const navigationItems: INavItemsEnum = [
  {
    parentMenu: {
      parentMenuId: 2000,
      active: true,
      title: "Home",
      url: "/",
      labIds: [1, 5, 6, 9],
      roleIds: [1, 3, 5, 7],
      childMenus: [],
    },
  },
  {
    parentMenu: {
      parentMenuId: 1,
      active: true,
      title: "Reports",
      url: "",
      labIds: [1, 5, 6, 9],
      roleIds: [1, 3, 5, 7],
      childMenus: [
        {
          menuItem: {
            id: 1,
            active: true,
            text: "Report 1",
            url: "ChildItem1",
            labIds: [1, 5, 6, 9],
            roleIds: [1, 3, 5, 7],
          },
        },
        {
          menuItem: {
            id: 2,
            active: true,
            text: "Report 2",
            url: "ChildItem2",
            labIds: [1, 5, 6, 9],
            roleIds: [1, 3, 5, 7],
          },
        },
        {
          menuItem: {
            id: 3,
            active: true,
            text: "Report 3",
            url: "ChildItem3",
            labIds: [1, 5, 6, 9],
            roleIds: [1, 3, 5, 7],
          },
        },
        {
          menuItem: {
            id: 4,
            active: true,
            text: "Report 4",
            url: "ChildItem4",
            labIds: [1, 5, 6, 9],
            roleIds: [1, 3, 5, 7],
          },
        },
      ],
    },
  },
  {
    parentMenu: {
      parentMenuId: 2,
      active: true,
      title: "Results",
      url: "",
      labIds: [1, 5, 6, 9],
      roleIds: [1, 3, 5, 7],
      childMenus: [
        {
          menuItem: {
            id: 5,
            active: true,
            text: "Another Item 1",
            url: "AnotherItem1",
            labIds: [1, 5, 6, 9],
            roleIds: [1, 3, 5, 7],
          },
        },
        {
          menuItem: {
            id: 6,
            active: true,
            text: "Another Item 2",
            url: "AnotherItem2",
            labIds: [1, 5, 6, 9],
            roleIds: [1, 3, 5, 7],
          },
        },
        {
          menuItem: {
            id: 7,
            active: true,
            text: "Another Item 3",
            url: "AnotherItem3",
            labIds: [1, 5, 6, 9],
            roleIds: [1, 3, 5, 7],
          },
        },
        {
          menuItem: {
            id: 8,
            active: false,
            text: "Another Item 4",
            url: "AnotherItem4",
            labIds: [1, 5, 6, 9],
            roleIds: [1, 3, 5, 7],
          },
        },
      ],
    },
  },
  {
    parentMenu: {
      parentMenuId: 3,
      active: true,
      title: "No Children",
      url: "more",
      labIds: [1, 5, 6, 9],
      roleIds: [1, 3, 5, 7],
      childMenus: [],
    },
  },
];

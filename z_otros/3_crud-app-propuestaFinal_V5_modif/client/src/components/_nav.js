export default {
  items: [
    {
      name: 'Tablero',
      url: '/dashboard',
      icon: 'icon-speedometer',
      //badge: {
        //variant: 'info',
        //text: 'NEW',
      //},
    },
    {
      title: true,
      name: 'Ejercicios',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '',             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Todos',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Productos',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    /*{
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    }, */
    {
      name: 'Servicios',
      url: '/base',
      icon: 'icon-puzzle',
      variant: 'success',
      attributes: { target: '_blank', rel: "noopener" },

      badge: {
        variant: 'info',
        text: 'NEW',
      },
      /*children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle',
        },
        
      ],*/
    },
   
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      variant: 'danger',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },     
  ],
};

import Layout from '@/components/front/Layout'
import Article from '@/components/front/pages/Article'
import ArticleContent from '@/components/front/pages/ArticleContent'
import About from '@/components/front/pages/About'
import Main from '@/components/front/Main'
import Project from '@/components/front/pages/Project'

export default [
  {
    path: '/',
    component: Main,
    name: 'Main'
  },
  {
    path: '/front',
    component: Layout,
    children: [
      {
        path: 'article',
        name: 'Article',
        component: Article,
        children: [
        ]
      },
      {
        path: 'article/:articleId',
        name: 'ArticleContent',
        component: ArticleContent
      },
      {
        path: 'project',
        name: 'Project',
        component: Project
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]

  },
  {
    path: '*',
    component: Main
  }
  ]


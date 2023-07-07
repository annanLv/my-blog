import fs from 'fs'
import path from 'path'

/**
 * replaceNum
 * @desc 清楚数字
 * @param list
 */
function replaceNumList(list: { text: string }[]) {
  list.forEach(item => {
    item.text = item.text.replace(String(parseInt(item.text)), '')
  })
  return list
}

/**
 * sortList
 * @desc 对列表进行排序
 * @param list
 */
function sortList(list: any[]) {
  list.sort((a, b) => parseInt(a.text) - parseInt(b.text))
  return replaceNumList(list)
}

/**
 * getAllItems
 * @desc 获取指定目录下的所有md文件
 * @param dir
 */
function getAllItems(dir: string) {
  const allMd = fs
    .readdirSync(path.join(__dirname, `../${ dir }`))
    .filter(f => /\.md$/i.test(f))
  const allItems: any = []
  allMd.forEach(item => {
    const name = item.split(".md")[0]
    allItems.push({
      text: name,
      link: name === "index" ? `/${ dir }/` : `/${ dir }/${ name }`
    })
  })
  return allItems
}


export function getSideBarList(dir: string) {
  const list = fs.readdirSync(path.join(__dirname, '../', dir))
  const folder = list.filter(f => !/\.md$/i.test(f) && f !== 'images')
  const sidebar: any = {
    [`/${ dir }/`]: []
  }
  if (folder.length) {
    folder.forEach((item, index) => {
      sidebar[`/${ dir }/`].push({
        text: item,
        items: sortList(getAllItems(`${ dir }/${item}`)),
      });
    });
  } else {
    sidebar[`/${ dir }/`].push({
      text: dir,
      items: sortList(getAllItems(`${ dir }`)),
    });
  }
  sidebar[`/${ dir }/`] = sortList(sidebar[`/${ dir }/`]);
  return sidebar;
}
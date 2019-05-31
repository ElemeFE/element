## Changelog

## 2.9.1

*2019-05-30*

#### New features

- Table
  - default-expand-all, expand-row-keys, toggle-row-expansion method and expand-change event are supported in Tree Table (#15709 by @ziyoung)

#### Bug fixes

- Table
  - Fix some bugs (#15709 by @ziyoung)
- Theme
  - Update api host (#15784 by @iamkun)

#### Optimization

- Chore
  - Update InfiniteScroll type (#15794 by @iamkun)

### 2.9.0

*2019-05-30*

#### New features

- Backtop
  - Add Backtop component (#15541 by @iamkun)
- PageHeader
  - Add PageHeader component (#15714 by @ziyoung)
- InfiniteScroll
  - Add InfiniteScroll directive (#15567 by @iamkun) 
- Cascader
  - Add multiple mode and filter-method (#15611 by @SimonaliaChen)
- Message
  - Display in stack mode (#15639 by @island205)
- Tag
  - Add prop effect (#15725 by @SimonaliaChen)
- Tabs
  - Left align title when type is card (#15695 by @luckyCao)
- DatePicker
  - Support literal strings (#15525 by island205)
- Image
  - Add support for transmit attrs and listeners (#15578 by @VanMess)
- Theme
  - Add popup background (#15412 by @iamkun)  
- Chore
  - Update new 2.9.0 index page (#15682 by @iamkun)

#### Bug fixes

- Table
  - Fix sort-change behaviour when sort condition is null (#15012 by @joelxr)
- Image
  - Fix ssr and object-fit compatibility (#15346 by @SimonaliaChen)
- Input
  - Fix show-word-count style in el-form (#15359 by @lvjiaxuan) 
  - Fix clear icon is not centered (#15354 by @YiiGuxing)
- Calendar
  - Fix not correct day of week when the day is Sunday (#15399 by @qingdengyue)
  - Fix October disappear bug (#15394 by @qingdengyue)
- Tabs
  - Fix basic tab nested in card tab padding error (#15461 by @SimonaliaChen)
- Tag
  - Fix stop propagation problem (#15150 by @infjer)
- Form
  - Fix input-group within form-item height error (#15457 by @SimonaliaChen)
  - Fix resetFields issue (15181 by @luckyCao)
- Tooltip
  - Fix custom tabindex not work (#15619 by @SimonaliaChen )
- Link
  - Fix link icon style class (#15752 by @iamkun)
- Select  
  - Revert set value to null when cleared (#15447 by @iamkun)
- Loading
  - Fix dom not change when loading state change quickly (#15123 by @FAKER-A)
- Switch
  - Label with el-switch repeating event (#15178 by @FAKER-A)
- Slider
  - Fix style problem when clicking slider bar(#15561 by @luckyCao)
- Radio
  - Fix issue 14808 (#14809 by @OverTree)
- Form
  - Fix resetFields issue (15181 by @luckyCao)
- Chore
  - Upgrade dependencies and fix demo bug (#15324 by ziyoung)
- Type
  - Fix loading type definition (#15635 by @iamkun)
  - Fix Icon type (#15634 by @iamkun)
  - Fix Link type definition (#15402 by @iamkun)

#### Optimization

- Cascader
  - Refactor (#15611 by @SimonaliaChen)
- Chore
  - Update make new component logic (by @iamkun)
- Docs
  - Rename variable in docs (#15185 by @liupl)
  - Fix image attribute type and default value (#15423 by @haoranyu)
  - Fix form doc bug (#15228 by @SHERlocked93)
 
### 2.8.2

*2019-04-25*

#### Bug fixes

- Icon
  - Update icon (#15272 by @iamkun)
- Docs
  - Fix Form and Input doc style (#15273 by @ziyoung)

### 2.8.1

*2019-04-25*

#### Bug fixes

- Icon
  - Update icon of cascader and select (#15264 by @SimonaliaChen)
  - Update icon (#15258 #15268 by @iamkun)

#### Optimization

- Chore
  - Update build script (#15267 by @ziyoung)
- Docs
  - Fix link underline color (#15265 by @iamkun)
- Other
  - Fix migrating config not compatible with camel case props and events (#15260 by @SimonaliaChen)

### 2.8.0

*2019-04-25*

#### New features

- Divider
  - Add divider component (#15055 by @island205)
- Rate
  - Add custom colors and icon-classes by passing a object (#15051 by @SimonaliaChen)
- Link
  - Add link component (#15052 by @iamkun)
- Calendar
  - Add calendar component (#14908 by @ziyoung)
- Icon
  - Add icon (#15214 by @iamkun)
- Alert
  - Add dark theme (#15041 by @island205)
- Image
  - Add image component (#15117 by @SimonaliaChen)
- Collapse
  - CollapseItem can be disabled (#15076 by @ziyoung)
- Carousel
  - Add direction attribute and support vertical direction (#15122 by @ziyoung)
- Pagination
  - Add hide-on-single-page attribute (#15096 by @ziyoung)
- Slider
  - Add marks attribute (#15133 by @luckyCao)
- Input
  - Add show-word-count attribute (#15075 by @luckyCao)
- InputNumber
  - Add step-strictly attribute (#15050 by @luckyCao)
- Tooltip, Dropdown, Popover
  - Support tabindex attribute (#15167 by @ziyoung)

#### Bug fixes

- Notification
  - Fix title word break (#15008 by @iamkun)
- Form
  - Fix switching the rules in el-form not work (#14985 by @luckyCao)
  - Fix label style (#14969 by @ziyoung)
  - Required FormItem displays asterisk when label is auto (#15144 by @ziyoung)
- Pagination
  -  Fix slot not updated (#14711 by @lucyhao)
- Table
  - Fix load bug in lazy mode (#15101 by @ziyoung)
  - Fix cell width when colspan is grater than 1 (#15196 by @ziyoung)
  - Improve performance (#14868 by @ziyoung)
  - Don't emit triggers sort-change during initialization (#14625 by @PeanutWatson)
  - Equal behaviour for height and max-height (#14660 by @arthurdenner)
- Dialog
  - Fix dialog body correctly break long words (#15027 by @iamkun)
- Alert
  - update type definition (#15186 by @ziyoung)
- Tabs
  - Fix issue where Promise rejection was hitting application (#14816 by @ffxsam)
  - Rerender when slot changes (#15238 by @ziyoung)
- Message
  - Fix type definition (#14968 by @agoni1212)
- Select
  - Fix error when value is undefined or null (#15022 by @luckyCao)
- Tree
  - Delete current node after it removed (#14604 by @sinchang)
  - Improve performance (#14881 by @ChenZhuoSteve)
- Dropdown
  - Fix style (#14907 by @doing123)
- Slider
  - Fix broken keyboard a11y bug (#14792 by @erezsob)
- Menu
  - ActiveIndex value shall be null if defaultIndex does not exist(#14074 by @hoythan)
- Directive
  - RepeatClick: use Date.now() instead of new Date() (#14776 by @pavelmash)
- Upload
  - Fix Upload transparent picture display style (#15039 by @iamkun)
- Theme
  - Add zero border (#15256 by @iamkun)

#### Optimization

- Chore
  - Update changelog zh-cn (#14965 by @iamkun)
  - Hide demo description when it's empty (#15014 by @ziyoung)
  - Display dev server info by default by @iamkun)
  - Fix 2.6.0 changelog error (#15026 by @iamkun)
  - Update build config (#14821 by @abc3660170)
  - Add hmr (#15221 by @SimonaliaChen)
  - Use sourcemap in dev environment (#15087 by @ibufu)
Docs
  - Rename variable in docs (#14602 #15003 #15094 #15105 by @liupl)
  - Fix upload doc error (#15023 by @iamkun)
  - Update Form custom validator doc (#15040 by @iamkun)
  - Update Tabs docs to display vertical tabs (#15053 by @iamkun)
  - Use eleme.cn as domain (#15139 by @ziyoung)
  - Fix Image route name (#15194 by @iamkun)
  - Remove duplicated fr translation (#15207 by @iamkun)

#### Breaking changes

- Rate
  - Fix decimal display support in disabled mode (#15089 by @haoranyu)
- Select
  - Use placeholder option label to set placeholder in filter mode (#14989 by @ibufu)

### 2.7.2

*2019-04-03*

#### Bug fixes

- Form
  - Fix auto `label-width` style (#14955 by @ziyoung)
  
#### Optimization
- Docs
  - Fix doc img link error (#14957 by @iamkun)
- Chore
  - Fix deploy mkdir error (#14952 by @iamkun)

### 2.7.1

*2019-04-03*

#### Bug fixes

- Select
  - Set value to null when cleared (#14322 by @aaronfulkerson)
- Input
  - Update DOM dependent values on type change (#14889 by @wacky6)
- Table
  - Make `defaultExpandAll` works when expanded column exists (#14935 by @ziyoung)
- Dialog
  - Background color can be configured (#14939 by @ziyoung)
- Form
  - `label-width` supports auto width (#14944 by @ziyoung)
  
#### Optimization
- Docs
  - Update Spanish docs (#14913 by @Gonzalo2310)
  - Add French doc for new component (#14924 by @ziyoung)
  - Optimize Tabs docs (#14938 by @ziyoung)

### 2.7.0

*2019-03-28*

#### New features

- Table
  - Add support tree structure data (#14632 by @ziyoung)

#### Bug fixes

- Tabs
  - Use primary color as boxShadow color (#14558 by @Richard-Choooou)
  - Rerender when label changes (#14496 by @akki-jat)
- Table
  - Footer follows body cell align (#14730 by @ziyoung)
- NavMenu
  - Fix click el-submenu trigger childMenu pop again bug (#14443 by @PanJiaChen)
- Dropdown
  - Make compatible with 2.6 new v-slot syntax (#14832 by @ziyoung)
- ColorPicker
  - Fix handle error hex color string (#14793 by @iamkun)
- Tree
  - Revert pr #13349 (#14847 by @ziyoung)
- Tooltip
  - Display when initial value is true (#14826 by @ziyoung)
- Docs
  - Update cascader docs (#14442 by @panhezeng)
- Style
  - Fix media query in sm-only, md-only, lg-only (#14611 by @sinchang)

#### Optimization

- Chore
  - Add webpage description (#14802 by @iamkun)

### 2.6.3

*2019-03-21*

#### Bug fixes

- Fix Cascader demo style (#14789 by @ziyoung)
- Remove unnecessary DOM operation (#14788 by @ziyoung)
- Fix DatePicker default-value DST (#14562 by @wacky6)

### 2.6.2

*2019-03-21*

#### New features

- DatePicker
  - Add monthrange for type attribute (#14487 by @zxyRealm)
- i18n
  - Add Croatian locale (#14360 by @danijelh)

#### Bug fixes

- Input
  - Fix regression (#14572 by @wacky6)
- DatePicker
  - Fix first-day-of-week computation (#14523 by @sinchang)
  - Fix week picker's value-format (#13754 by @wacky6)
- Steps
  - Fix issue #14502 (#14596 by @sinchang)
  - Fix style with simple theme (#14610 by @sinchang)
- Docs
  - Update french doc for 2.6.1 and fix typos (#14555 by @smalesys)
  - Rename variable in Table docs (#14587 by @likwotsing)
  - Add french search index (#14565 by @iamkun)
  - Fix TimePicker page style (#14579 by @ziyoung)
  - Rename variable in Upload docs (#14593 by @liupl)
  - French translation update (#14643 by @smalesys)
  - Update Form async validator docs (#14694 by @iamkun)
  - Fix tooltip doc error (#14748 by @iamkun)
  - Fix typo (#14751 by @2bj)
  - Fix highlighting control elements for Webkit touch (#14703 by @VladG0r)

#### Optimization

- Chore
  - Update ci build script (#14600 by @ziyoung)
  - Update ga tracking (#14560 by @iamkun)
  - Add more ga event (#14633 by @iamkun)
  - Update discusion group (#14741 by @iamkun)
  - Update test deps and conf (#14735 by @wacky6)
  - Upgrade gulp (#14745 by @ziyoung)
  - Use codepen to display demo & fix doc error (#14747 by @ziyoung)

### 2.6.1

*2019-03-03*

#### Bug fixes

- **Don't specify node version** (by @iamkun in #14546)
- Fix doc directory in `deloy-faas.sh` (by @ziyoung in #14553)
- Fix date style issue in changelog for 2.6.0 (by @island205 in #14547)
- Fix doc typo (by @wack6 in #14552)

### 2.6.0

*2019-03-01*

#### New features
- Timeline
  - Add timeline component (by @jikkai in #14248)
- DropdownItem
  - Add icon prop to `el-dropdown-item` (by @gabrielboliveira in #14088)
- Input
  - Add show-password props (by @phshy0607 in #13966)
- Select
  - Add slot `empty` (by @elfman in #13785)
- Autocomplete
  - Add highlight-first-item prop (by @YamenSharaf in #14269)
- I18n
  - Created Armenian locale (by @hamletbarsamyan in #14214)
- Docs
  - French translation (by @smalesys in #12153, #14418, #14434)

#### Optimization
- Alert
  - Update alert description default slot class (by @iamkun in #14488)
- Input
  - Update input password (by @iamkun in #14480)
- InputNumber
  - Remove unnecessary parseFloat (by @JuniorTour in #14172)
- Menu
  - Add support for `el-menu-item` without index (by @georgyfarniev in #13298)
- Table
  - Remove some html DOM operations (by @elfman in #13643)
- Upload
  - Optimize code (by @elfman in #13973)
- Popup
  - Optimize code (by @KAionro in #14413)
- Docs
  - Add more detail about how to run play mode for contribution (by @island205 in #14355)
  - Warn input as a controlled component. (by @wacky6 in #14463)
  - Update Table doc (by @luguokong in #14329)
  - Update input doc (by @iamkun in #14437)
  - Update custom-theme docs (by @wangguohao in #14297)
  - Make the icon style change when hover on it (by @tuxinghuan in #14295)
- Build
  - Minimizing css and js for Element doc site (by @iamkun in #14430)
  - Speeding up webpack (by @hetech in #14484)
  - Use cli to select release version (by @hetech in #14354)
- Install stale for issue handling (by @island205 in #14392)

#### Bug fixes
- Menu
  - Fix subMenu focus bug when switch browser tab (by @liupl in #13976)
- MessageBox
  - Fix type definition (by @NateScarlet in #14278)
- ScrollBar
  - Prevent right button click on thumb (by @xifeiwu in #14196)
- Switch
  - Trigger form validation if value changes (by @hetech in #14426)
- Table
  - Make toggleAllSelection method an instance method (by @letanure in #14075)
- Tabs & Dropdown
  - Fix style (by @hetech in #14452)
- Tree
  - Empty-text tips are different from tables (by @ColinCll in #14331)
- Docs
  - Fix  DatetimePicker format doc error (by @iamkun in #14290)
  - Spelling issue in datepicker documentation (by @helmut in #14481)
  - Fix pagination doc style (by @liuchuzhang in #14451)

#### Breaking changes
- Table
  - Fix params order of row events (by @jikkai in #12086)

### 2.5.4

*2019-02-01*

#### Bug fixes

- Build: Fix babel config issue which lead to collapse transition broken (by @island205 in #14282)

### 2.5.3

*2019-01-31*

#### Optimization

- Optimize code of Message (by @vok123 in #14029)
- Retire gh-pages (by @ziyoung in #14266)
- Add IssueHunt link (by @island205 in #14261)

#### Bug fixes

- Fix UMD module error on server side (by @island205 in #14242)
- Fix active TabBar style (by @iamkun in #14240)
- Fix Table demo code error (by @xunmeng in #14253)

### 2.5.2

*2019-01-27*

#### Optimization
- Docs:
  - Update ChangeLog ES 2.5.1 (by @Gonzalo2310 in #14231)

#### Bug fixes
- Build:
  - Delete unremoved comments in umd module `lib/index.js` (by @island205 in #14233)
  - Fix export error fired in commonjs module used in nuxt.js (by @island205 in #14232)
  - Fix 2.5.1 build issues  (by @iamkun in #14228)

### 2.5.1

*2019-01-26*

#### Optimization
- DatePicker: highlight current month and year (by @Debiancc in #14211)
- Update 2.5.0 changelog (by @wacky6 in #14217)

#### Bug fixes
- Fix export issue generate by webpack upgrading (by @island205 in #14220)
- Keep 2.4.11 docs && new sub folder for 2.5+ (by @iamkun in #14222)

### 2.5.0

*2019-01-25*

#### New features
- DatePicker
  - Add `validate-event` attribute (by @ziyoung in #13531)
- DateTimePicker
  - `pickerOptions` support `selectableRange` option (by @eeeeeeeason)
- Tag
  - Add `click` event (by @licdream in #14106)
- I18n
  - support Kyrgyz language (by @zzjframework in #14174)

#### Optimization
- Upgrade to webpack@4 (by @jikkai in #14173)
- Input
  - Simplify implementation, follow one-way data flow. Fix several related bugs. (by @wacky6 in #13471)
- Update Axure file，add new components (by @ziyoung in #13773)

#### Bug fixes
- Autocomplete
  - Fix dropdown's last line beging clipped (by @ziyoung in #13597)
  - Fix missing popper arrow (by @liuchuzhang in #13762)
- Carousel
  - Cleanup timer when component is destroyed (by @elfman in #13820)
- Cascader
  - Remove deprecated property of computed props (by @iamkun in #13737)
  - Fix CascaderOption's type definition in TypeScript (by @NateScarlet in #13613)
  - Fix icon covering the text (by @ziyoung in #13596)
- Checkbox
  - Refine style (by @PanJiaChen)
- DatePicker
  - Add missing v-for `key` in TimeSpinner (by @Ende93 in #13547)
  - Fix week highlight on year boundary (by @suyi91 in #13883)
- Input
  - Fix textarea DOM node reference (by @laomu1988 @island205 in #13803)
- Pagination
  - Input value won't be less than 1 (by @elfman in #13727)
- Popover
  - Fix popover issues with hover trigger (by @goldengecko in #13104)
  - Fix popper instance memory leak (by @qpxtWhite in #13988)
- Radio
  - Refine style (by @ohhoney1)
- Table
  - Enhanced table sorting when clicking on the sorting arrow (by @ohhoney1 in #12890)
  - Fix empty text vertical alignment issue on IE10+ (by @imzjy in #13638)
  - Fix index type documentation (by @ilovefafa in #13628)
  - Fix `show-summary` display issue when multilevel header has fixed attr (by @luckyCao in #13914)
- Tabs
  - Fix auto scroll bug (by @iamkun in #13696)
  - Get the correct tab through tab name (by @iamkun in #13705)
  - Use paneName instead of name to determine pane style (by @iamkun in #13733)
- Tree
  - Fix `showCheckbox` prop on `Tree` can not affect their children `tree-node` (by @KidneyFlower)
  - Update doc and definition file (by @ziyoung in #13540)
- Upload
  - Add `url` prop to upload file when `list-type` changed (by @elfman in #13771)
- Slider
  - Fix source code indentation (by @wacky6 in #13955)
- I18n
  - Add missing Catalan translations (by @jaumesala)
  - Add missing ru translation (by @justlp in #13658)
  - Fix Finnish translations (by @jenkrisu in #14137)
- Doc
  - Update Spanish doc 2.4.11 (by @Gonzalo2310 in #13522)
- Others
  - Remove unnecessary script (by @ziyoung)
  - Fix error anchor link (by @iamkun in #13753)
  - Fix inconsistent capitalization in documentation (by @wonderjar)
  - Add DingDing chat group qr code to readme (by @iamkun in #13957)
  - Add yarn logs to .gitignore (by @mimimi in #13922)
  - Remove sponsor duotai (by @island205 in #14156)
  - Update readme qr code src (by @iamkun in #13960)
  - Update CDN link, fix typo (by @ziyoung)

### 2.4.11

*2018-11-21*

- Revert pr #13296. Fixed clicking on Menu external causing Submenu collapsed, #13478
- Adjust small screen (xs) media query breakpoints, #13468 (by @alekoshen712)

### 2.4.10

*2018-11-16*

- Fixed multiple clicks on Select to display the drop-down list, #13268
- The clear icon for input is not displayed when Form is disabled, #13208
- Adjust the style of Select, Progress, Autocomplete, Tooltip, Collaspe, TimePicker, #13188 (by @porcelainHeart) #13210 #13266 #13257 #13290 #13347 (by @PanJiaChen)
- Carousel component added `loop` attribute, #13217
- When the data of Table changes, the highlighted line will remain, #13200
- Table header scoped slot can receive parameters, #13263
- Table's `clearFilter` method supports arguments, #13176
- Tooltip is no longer created when there is no content in the Table cell, #13152 (by @rongxingsun)
- The input box contents of the ColorPicker panel can be displayed correctly, #13278
- ColorPicker no longer triggers form validation when dragging, #13299
- InputNumber added `select `method, #13286 (by @st-sloth)
- Autocomplete added `clear` event, #12171(by arthurdenner) #13326
- You can close Menu by clicking on Menu outside, #13296
- Form's `validateField` method can receive arguments, #13319
- Cascader added `visible-change` event, #13415
- DatePicker added range-separator slot, #13272 (by @milworm)
- Tree adds `iconClass` and `currentNodeKey` properties, #13337 #13197 (by @isnifer)
- Progress's` status` added text #13198 (by @ali-master)
- Fixing tree's `defaultCheckedKeys` caused an error, #13349 (by @dive2Pro)

### 2.4.9

*2018-10-26*

- The parameter of Form's  `clearValidate`  supports string, #12990 (by @codinglobster)
- Added type attribute for Badge, #12991
- Users can use scoped-slot to customize table column header #13012 (by @ivanseidel)
- Fixed the input box of Select unable to type text under IE, #13034 (by @GaliMU)
- Select option does not wrap when space is enough, #12329 (by @akki-jat)
- When dropdown list of Select is expanded, the arrow icon will also display correctly, #12353 (by @firesh)
- Fixed that the size attribute of Select does not work, #13070
- Select multiple values can be cleared, #13049 (by @ZSkycat)
- Fixed the last TabNav unable be deleted, #13039
- Fixed that TabNav label is not displayed correctly, #13178
- Added title slot for Alert, #13082 (by @Kingwl)
- Fixed an issue where the tooltip content in Table was incorrect, #13159 (by @elfman)
- Optimize the animation of Upload when file is deleted, #12987
- Adjusted style of InputNumber when control button is not displayed, #13052

### 2.4.8

- Not displaying outline when Switch is focused, #12771
- Fixed Dropdown's style in ButtonGroup, #12819 (by @bluejfox)
- Added opened event for Dialog, #12828
- Fixed the incorrect display order of TabNav, #12846
- Fixed the problem that Tabs did not scroll to the selected tab, #12948
- Fixed the problem that the identifier does not display when the Tree node is dragged, #12854
- The validate event parameter of Form contains the validation message, #12860 (by @YamenSharaf)
- Fixed DatePicker not to verify the validity of user input time, #12898
- Fixed the problem that `render-header` attribute of Table header doesn't work, #12914

### 2.4.7

*2018-09-14*

- Fixed DatePicker not triggering form validation, #12328 #12348
- Fixed DatePicker throwing errors in multiple mode, #12347
- Fixed incorrect position of DatePicker spinner, #12415 (by @rang-ali)
- Fixed automatic filling of DatePicker input box, #12521 (by @abdallanayer)
- Fixed Input not highlighted in Cascader, #12341
- Fixed wrong order of Tabpane, #12346
- Fixed incorrect position of ColorPicker cursor, #12376 (by @cnwhy)
- Fixed the style of Submenu, #2457
- Fixed not highlighted after Submenu is selected, #12479
- Fixed incorrect values selected by Cascader, #12508 (by @huangjinqiang)
- Fixed incorrect value of Pagination input box, #12525
- Fixed order that Pagination triggers events, #12530
- Fixed Table Filter not displayed, #12539
- Fixed Tree unable to delete nodes, #12684
- Fixed height of Select Input changing in single mode, #12719
- Fixed style of FormItem label in nested Form, #12748
- Added `autocomplete` attribute for Input, deprecated `auto-complete`, #12514 (by @axetroy)
- Added slots-scope for Form to display validation information, #12715 (by @YamenSharaf)

### 2.4.6

*2018-08-09*

- Fixed Table not showing filter icon when `filters` is assigned empty array, #12165
- Fixed Menu not saving active state when `collapse` is changed, #12178 (by @elfman)
- Fixed Cascader not escaping special characters for Regexp, #12248
- Fixed disabled RadioButton showing box-shadow when clicked, #12262
- Fixed arrow key not effect when default value is `undefined`,#12322
- Fixed query function of Select not debounced in multi mode, #12181
- Fixed query keyword of Select disappearing in multi mode, #12304
- Fixed incorrect width of Dialog when it is displayed in full screen, #12203
- Fixed incorrect display of Main on IE, #12237
- Fixed Input triggering two form validations, #12260
- Fixed adding new Tree node causing nodes to disappear, #12256
- Fixed Tree node not deleted after dragging, #12279
- Fixed Popover not visible when InputNumber focuses, #12284
- Added `popper-append-to-body` attribute for Autocomplete, #12241
- Added `sync` modifier support for Pagination's `page-size` attribute, #12281

### 2.4.5

*2018-07-26*

- Fixed Table setting `class-name` does not work for `expand` column, #12006
- Added `toggleAllSelection` method for Table, #12047
- Fixed wrong position of suffix slot when Input contains Select, #12108
- Fixed `line-height` of Option unable to set, #12120
- Fixed TimeSelect with default value of `null` could not be assigned after executing `resetField`, #12010
- Fixed keydown event which is not arrow key does not work in Tree, #12008
- Fixed parent node checked in lazy mode, #12106
- Added `includeHalfChecked` parameter for getCheckedNodes of Tree, #12014

### 2.4.4

*2018-07-13*

- Fixed triggering Select validation after Form resetting, #11837
- Fixed wrong position of Input `suffix` slot when `suffix` slot with `append` slot, #11951
- Fixed clearable Input still displaying the clear icon when readonly, #11967
- Fixed Tree node checked when it's disabled, #11847
- Fixed Tree's `default-checked-keys` not working, #11971
- Fixed `empty-text` not visible when Tree node filtered, #11971
- Fixed the position of oversized `empty-text` in Table, #11965
- Fixed Table row not be unhighlighted when `current-row-key` is assigned to `null`, #11866
- Fixed showing filter dropdown when `filters` is an empty array, #11864
- Fixed Radio's label does not stop event propagation, #11912

### 2.4.3

*2018-07-03*

- Fixed `allow-drop` not working properly when Tree nodes have a custom height, #11797
- Now you can pass a parameter to the `clearValidate` method of Form, specifying which FormItems' validation results need to be cleared, #11821
- Added `distinguishCancelAndClose` attribute for MessageBox, #11831

### 2.4.2

*2018-06-26*

- Now `class-name` and `label-class-name` of Table are reactive, #11626
- Fixed Table still highlighting clicked row when `highlight-current-row` is `false`, #11646
- Fixed a style bug of ButtonGroup when it has only one `round` or `circle` Button, #11605
- Fixed style of page size Select of Pagination, #11622
- Fixed Menu's `open` method error when `collapse` is dynamically changed, #11646
- Added `activeName` and `oldActiveName` parameters to the before-leave hook of Tabs, #11713
- Fixed Cascader focused after outside clicked, #11588
- Fixed Cascader not closing when option is clicked when `change-on-select` is true, #11623
- Now updating Select's value programmatically will trigger form validation, #11672

### 2.4.1

*2018-06-08*

- Removed Autocomplete's duplicate type declaration, #11388
- Fixed Select's dropdown arrow style in FireFox when nested in Form, #11427
- Fixed clear icon of Select still showing when the initial value is `null`, #11460
- Fixed disabled radio showing box-shadow when clicked, #11462
- Added `iconClass` attribute for MessageBox, #11499
- Added `stretch` attribute for Tabs, #11476
- Fixed rendering order issue of TabPane when Tabs is `lazy`, #11461
- Fixed Table not retaining current highlight row when expanded, #11464
- Fixed focusing state when `before-leave` returns a resolved promise, #11386
- Fixed disabled Popover still creating poppers, #11426
- Fixed Tree's endless loop when a new node is added in lazy mode, #11430 (by @wangjingf)
- Added `closed` event for Dialog, #11490

### 2.4.0 Fullerene

*2018-05-28*

#### New features
- General
  - Dev tool and bundler is switched to native webpack, #11216
  - Now you can globally set the initial z-index of popups, #11257
- Autocomplete
  - Added `hide-loading` attribute, #11260
- Button
  - Now you can use the `size` attribute on circle buttons to control their sizes, #11275
- InputNumber
  - Added `precision` attribute, #11281
- Tabs
  - Added `before-leave` attribute, #11259
  - Added `lazy` attribute, #11167(by @Kingwl)
- Table
  - Added `sort` method to manually sort the table, #11311

#### Bug fixes
- Input
  - Fixed an issue that causes a re-render when using the Chinese IME to quickly input text, #11235 (by @STLighter)
- Popover
  - Fixed the console error when the triggering element is Radio or Checkbox, #11265
- Breadcrumb
  - Fixed the `to` attribute not supporting dynamic update, #11286
- Upload
  - Fixed the console error when a File is resolved in the returned Promise of the `beforeUpload` method, #11297 (by @qusiba)
- Tooltip
  - Fixed arrow not positioned correctly when content is empty, #11335
- Autocomplete
  - Fixed incorrect input suggestions after deleting keyword quickly, #11323
- ColorPicker
  - Fixed `active-change` event incorrectly triggering when picker dropdown is closed, #11304
- Table
  - Fixed style error of oversized filter panel, #11314
  - Fixed currently selected row not retained when the table is sorted, #11348
- Checkbox
  - Fixed single checkbox not supporting validation, #11271
- Radio
  - Fixed disabled Radio still being selected when pressing space key, #11303
- MessageBox
  - Fixed the `el-popup-parent--hidden` class not removed when opening MessageBox in succession, #11371

### 2.3.9

*2018-05-18*

- Fixed when the source data does not have the field specified by a TableColumn's `prop` attribute, an error would occur when the mouse moves into that column's cells, #11137
- The `lockScroll` attribute of pop up components no longer adds an inline style to the parent element, but instead adds a class name, #11114
- Fixed the icon of Progress not displaying when its `status` is exception, #11172
- Fixed options' `disabled` attribute not working in filterable Cascader's filter result list, #11185
- Fixed an issue where Table's expanded row cannot be collapsed if the data source is updated after its expansion, #11186
- `setCurrentKey` of Tree now accepts `null` as its param to cancel the currently highlighted node, #11205

### 2.3.8

*2018-05-11*

- Fixed DatePicker panel jumping to the current month after picking a date in a non-current month when `type` is dates, #10973
- Fixed clearable Input still displaying the clear icon when readonly, #10912
- Fixed closing the DatePicker panel without changing the value incorrectly triggering the `change` event, #11017
- Fixed keyboard navigation not working properly when Select has grouped options, #11058
- Added `prefix` named slot for Select, #11063
- Added `clearValidate` method for FormItem, #11076
- Added `checkOnClickNode` attribute for Tree, #11111

### 2.3.7

*2018-04-29*

- Fixed Table not updating its header widths when the scroll bar disappears due to filtering, #10834
- Fixed clearable Input still showing the clear icon when its initial value is `null`, #10912
- Fixed incorrect trigger of the `active-change` event after changing ColorPicker's binding value programatically, #10903 (by @zhangbobell)
- Fixed filterable Select causing an infinite loop when navigating options using keyboard if all options are disabled, #10945

### 2.3.6

*2018-04-21*

- Fixed wrong behavior of Tree's `allow-drop` callback when `type` parameter is used, #10821
- Now you can properly enter keywords in filterable single Select in IE11, #10822
- Fixed single Select incorrectly triggering `blur` event after clicking an option, #10822

### 2.3.5

*2018-04-20*

- Fixed incorrect highlights in DatePicker panel when `type` is week, #10712
- Fixed InputNumber being empty when its initial value is 0, #10714
- Added `automatic-dropdown` attribute for Select, #10042 (by @Seebiscuit)
- Fixed disabled Rate's value still being updated by navigation keys, #10726 (by @Richard-Choooou)
- Now DatePicker's `type` attribute can be `'dates'`, where you can pick multiple dates in one picker, #10650 (by @Mini256)
- Added `prev-click` and `next-click` events for Pagination, #10755
- Added `pager-count` attribute for Pagination, #10493 (by @chongjohn716)
- Added `type` as the 3rd param of Tree's `allow-drop` attribute callback, #10792
- Now we use ResizeObserver to detect DOM element resizing, #10779

### 2.3.4

*2018-04-12*

- Deleted duplicate `showTimeout` attribute in SubMenu's TypeScript declaration, #10566 (by @kimond)
- Now you can customize Transfer's data item using scoped slot, #10577
- Fixed clicking disabled prev and next button of Pagination still triggers `current-change` event, #10628
- Fixed Textarea displaying `undefined` in SSR when its value is not set, #10630
- Fixed disabled TabItem style when `type` is border-card, #10640
- Added `$index` as `formatter`'s fourth param of Table, #10645
- Fixed CheckboxButton not exported in TypeScript declaration, #10666

### 2.3.3

*2018-04-04*

- Added `shadow` attribute for Card, #10418 (by @YunYouJun)
- Fixed Badge being hidden when `value` is `0`, #10470
- Fixed some bugs of draggable Tree, #10474 #10494
- Added `placement` for Autocomplete, #10475
- Now `default-time` attribute also works in non-range DateTimePicker, #10321 (by @RickMacTurk)
- Removed the blue outline of TabItem after the browser blurs or is minimized, #10503
- Added `popper-append-to-body` attribute for SubMenu, #10515
- Removed visual feedback when hovering on non-link BreadcrumbItem, #10551
- Fixed InputNumber's `change` event to ensure the component's binding value is updated in the event handler, #10553

### 2.3.2

*2018-03-29*

- Fixed an Autocomplete regression, #10442

### 2.3.1

*2018-03-29*

- Fixed a regression that `type` of Input is not passed down to the native input element, #10415
- Added `blur` method for Select, #10416

### 2.3.0 Diamond

*2018-03-28*

#### New features
- Table
  - Now `formatter` of TableColumn can be dynamically updated, #10184 (by @elfman)
  - Added `select-on-indeterminate` attribute, #9924 (by @syn-zeta)
- Menu
  - Added `collapse-transition` attribute, #8809 (by @limichange)
- Input
  - Added `select` method, #10229
  - Added `blur` method, #10356
- ColorPicker
  - Added `predefine` attribute, #10170 (by @elfman)
- Tree
  - Added `draggable`, `allow-drop` and `allow-drag` attributes, and `node-drag-start`, `node-drag-enter`, `node-drag-leave`, `node-drag-over`, `node-drag-end` and `node-drop` events, #9251 #10372 (by @elfman)
- Form
  - `validate` method now has a second parameter, containing information of form items that failed the validation, #10279
  - Added `validate` event, #10351
- Progress
  - Added `color` attribute, #10352 (by @YunYouJun)
- Button
  - Added `circle` attribute, #10359 (by @YunYouJun)

#### Bug fixes
- Form
  - Fixed label of FormItem not align with mixed Input, #10189
- Menu
  - Now collapsed Menu will only show the Tooltip when the `title` slot of MenuItem is set, #10193 (by @PanJiaChen)
- Pagination
  - Fixed `current-change` event wrongly triggering without user interaction, #10247
- DatePicker
  - Now the date and time value in the dropdown panel are correctly formatted based on the `format` attribute, #10174(by @remizovvv)
- Upload
  - Fixed `accept` attribute not working when `drag` is true, #10278

### 2.2.2

*2018-03-14*

- Added `clear` event for Input, #9988 (by @blackmiaool)
- Now manual input of ColorPicker supports `hsl`, `hsv` and `rgb` modes, #9991
- Fixed DatePicker not triggering `change` event when its initial value is cleared, #9986
- Now icon class related attributes of Rate support dynamic updates, #10003
- Fixed Table with fixed columns not updating its height correctly if `max-height` is set, #10034
- Now DatePicker's range mode supports reverse selection (clicking the end date, then clicking the start date), #8156 (by @earlymeme)
- Added `disabled` attribute for Pagination, #10006
- Added `after-enter` and ` after-leave` events for Popover, #10047
- Fixed Select not triggering validation when user selects an option after executing `resetFields` of Form, #10105
- Fixed incorrect widths of fixed columns of Table in some cases, #10130
- Fixed MessageBox inheriting the `title` attribute of its previous instance when called without `title`, #10126 (by @Pochodaydayup)
- Added `input-size` attribute for Slider, #10154
- Added `left-check-change` and `right-check-change` events for Transfer, #10156

### 2.2.1

*2018-03-02*

- Fixed Aside, Header and Footer shrinking in some layout, #9812
- Fixed Table with a `height` attribute not rendering in SSR, #9876
- Fixed expandable Table not calculating its height when a row is expanded, #9848
- Fixed `change` event not trigger when manually typing date in DateTimePicker, #9913
- Fixed Select showing its options when the input box is right-clicked, #9894 (by @openks)
- Added `tooltip-class` attribute for Slider, #9957
- Now Select will stay focused after selection, #9857 (by @Seebiscuit)
- Added `target-order` attribute for Transfer, #9960

### 2.2.0 Graphite

*2018-02-12*

#### New features
- Menu
  - Added `popper-class` and `disabled` attributes for SubMenu, #9604 #9771
  - Horizontal Menu now supports multi-layered SubMenu, #9741
- Tree
  - Added `node-contextmenu` event, #9678
  - Now you can customize node template using scoped slot, #9686
  - Added `getNode`, `remove`, `append`, `insertBefore`, `insertAfter`, `getCheckedKeys`, `getHalfCheckedNodes`, `getHalfCheckedKeys` methods and `check` event, #9718 #9730
- Transfer
  - Added `clearQuery` method, #9753
- Select
  - Added `popper-append-to-body` attribute, #9782

#### Bug fixes
- Table
  - Fixed clicking expanding icon of an expandable row triggers `row-click` event, #9654
  - Fixed layout not update when column width is changed by user dragging, #9668
  - Fixed style issue when summary row co-exists with fixed columns, #9667
- Container
  - Fixed container components not stretching in IE11, #9655
- Loading
  - Fixed Loading not showing when the value of `v-loading` is changed to true in the `mounted` hook, #9722
- Switch
  - Fixed two native click events are triggered when Switch is clicked, #9760

### 2.1.0 Charcoal

*2018-01-31*

#### New features
- Cascader
  - Added `focus` and `blur` events, #9184 (by @viewweiwu)
- Table
  - The `filter-method` now has a third param `column`, #9196 (by @liyanlong)
- DatePicker
  - Added `prefix-icon` and `clear-icon` attributes, #9237 (by @AdamSGit)
  - Added `default-time` attribute, #9094 (by @nighca)
  - `value-format` now supports `timestamp`, #9319 (by @wacky6)
- InputNumber
  - Now the binding value can be `undefined`, #9361
- Select
  - Added `auto-complete` attribute, #9388
- Form
  - Added `disabled` attribute, #9529
  - Added `validateOnRuleChange` attribute, #8141
- Notificaition
  - Added `closeAll` method, #9514

#### Bug fixes
- InputNumber
  - Fixed value resetting when typing decimal point, #9116
- Dropdown
  - Fixed dropdown menu incorrect positioning when the page only has a horizontal scrollbar in some browsers, #9138 (by @banzhuanmei)
- Table
  - Fixed an error in calculating number of fixed columns after the column data changes, #9188(by @kolesoffac)
  - Fixed the border of the last column of the grouped header not properly displayed, #9326
  - Fixed incorrect positioning of table header in Safari, #9327
  - Fixed expanded row collapsing when the table data changes, #9462
  - Fixed unnecessary multiple renders in some conditions, #9426
  - Fixed column width calculation error when `width` of TableColumn changes, #9426
- Loading
  - Fixed Loading not hiding correctly in some conditions, #9313
- DatePicker
  - Fixed `focus` method not working in range mode, #9437
  - Fixed clicking the "now" button still selecting the current date even if it is disabled, #9470 (by @wacky6)
  - Fixed date clamping when navigating, #9577 (by @wacky6)
- Steps
  - Fixed style error in IE 11, #9454

#### Breaking changes
- Menu
  - The popup menu in `collapse` mode now appends directly to `body`, so that it is visible when nested in Aside, #9263
- Table
  - Now checking the checkboxes in multi-selection Table doesn't trigger `row-click` event, #9467
- Loading
  - The `z-index` of non-fullscreen loading mask is changed to 2000. The `z-index` of fullscreen loading mask will update dynamically with the popup components, #9522
- Dropdown
  - `show-timeout` and `hide-timeout` attributes now only works when trigger is `hover`, #9573

### 2.0.11

*2018-01-08*

- Fixed border color issue of Select when in `prepend` or `append` slot of Input, #9089
- Fixed `remove-tag` event's parameter of Select, #9090
- Added `show-timeout` and `hide-timeout` attributes for SubMenu, #8934 (by @HugoLew)
- Fixed missing Tooltip style of `show-overflow-tooltip` when Table is imported on demand, #9130
- Fixed Table column's sorting malfunctioning after `clearSort` is executed on that column, #9100 (by @zEmily)
- i18n config file for Czech is renamed from `cz` to `cs-CZ`, #9164

### 2.0.10

*2017-12-29*

- Fixed wrong max height calculation of Table when fixed column and summary row co-exist, #9026
- Fixed uncompiled color style of empty text in Table, #9028
- Now DatePicker only emits `change` event when value is truly changed, #9029 (by @remizovvv)
- Added `tabindex` attribute for Input, #9041 (by @dicklwm)

### 2.0.9🎄

*2017-12-24*

- Added `before-remove` hook function for Upload, #8788 (by @firesh)
- Fixed initial value of `error` not working for FormItem, #8840
- Now Loading directive supports custom class name by assigning `element-loading-custom-class` attribute, #8826 (by @earlymeme)
- Fixed CarouselItem becoming invisible when data is asynchronously updated, #8921
- Added `renderAfterExpand` attribute for Tree, #8972

### 2.0.8

*2017-12-12*

- Added Spanish documentation
- Fixed `show-timeout` of Dropdown not working when trigger is click, #8734 (by @presidenten)
- Fixed Form validation timing for rules whose trigger is blur, #8776
- Fixed blur event of ranged DatePicker, #8784
- `format` of TimePicker now supports AM/PM, #8620 (by @firesh)

### 2.0.7

*2017-11-29*

- Fixed disabled text button style, #8570

### 2.0.6

*2017-11-29*

- Fixed style bug of Table's sorting icons, #8405
- Fixed trigger mechanism for Popover when its `trigger` is manual, #8467
- Added `prefix-icon` and `suffix-icon` attributes for Autocomplete, #8446 (by @liyanlong)
- Added `separator` attribute for Cascader, #8501
- Added `clearable` attribute for Input, #8509 (by @lbogdan)
- Added `background` attribute for Pagination, #8553

### 2.0.5

*2017-11-17*

- Fixed Popover, Tree, Breadcrumb and Cascader regression in 2.0.4, #8188 #8217 #8283
- Fixed memory leak of clickoutside directive, #8168 #8225 (by @badpunman @STLighter)
- Fixed multiple Select height when its value is cleared, #8317 (by @luciy)
- Added `collapse-tags` attribute for multiple Select to replace tags with one line of text, #8190
- Fixed high CPU consumption caused by hidden Table, #8351
- Now you can use `doLayout` method of Table to update its layout, #8351

### 2.0.4

*2017-11-10*

- Improved accessibility for Cascader, Dropdown, Message, Notification, Popover, Tooltip and Tree
- Fixed Container resize when the width of viewport decreases, #8042
- Fixed Tree's `updateKeyChildren` incorrectly deleting child nodes, #8100
- Fixed bordered CheckboxButton's height when nested in a Form, #8100
- Fixed Menu's parsing error for custom colors, #8153 (by @zhouyixiang)

### 2.0.3

*2017-11-03*

- Fixed `editable` and `readonly` attributes for ranged DatePicker, #7922
- Fixed style error of nested Tabs, #7941
- Fixed style error of the last Step of vertical Steps, #7980
- Fixed trigger timing of `current-change` event for Pagination, #7995
- Fixed unregistered Tooltip in Menu, #7995

### 2.0.2

*2017-10-31*

- Now right-clicking the buttons of InputNumber won't change its value, #7817
- `validate` method of Form can now wait for asynchronous validations before executing its callback, #7774 (by @Allenice)
- Fixed range selection of DatePicker not working in Chromium 53-57 browsers, #7838
- Fixed missing preview and delete icons of Upload when its `list-type` is picture-card, #7857
- Added `sort-by` attribute for TableColumn, #7828 (by @wangfengming)
- Fixed DatePicker sometimes displaying wrong year number when selecting the first week in week mode, #7860 (by @hh23485)
- Fixed icon style error of vertical Steps, #7891
- The hot area for node arrows in Tree is expanded, #7891

### 2.0.1

*2017-10-28*

- Fixed style error of RadioButton and CheckboxButton, #7793
- Fixed TimePicker not respond to mouse scroll in some conditions, #7811
- Fixed incomplete styles of some components when imported on demand, #7811

### 2.0.0 Carbon

*2017-10-27*

#### New features
- General
  - A new theme: `theme-chalk`
  - Accessibility of the following components are improved: Alert, AutoComplete, Breadcrumb, Button, Checkbox, Collapse, Input, InputNumber, Menu, Progress, Radio, Rate, Slider, Switch, Upload
  - Added TypeScript typings
  - All existing icons are redesigned. Some new icons are added
  - Added a series of breakpoint-based utility classes that hide elements when the viewport size meets certain conditions
  - Added layout components: Container, Header, Aside, Main, Footer
  - Now you can configure component sizes globally. When importing Element, you can add a global config object with a `size` prop to configure default sizes for all components.
- Button
  - Added `round` attribute. It's used for round-cornered Buttons #6643
- TimeSelect
  - Now can be navigated by `Up` and `Down`, and hitting `Enter` selects the time #6023
- TimePicker
  - Now can be navigated by arrow keys, and hitting `Enter` selects the time #6050
  - Added `start-placeholder` and `end-placeholder`. They're placeholders for the two input boxes in range mode #7169
  - Added `arrow-control` attribute to spin the time with arrows #7438
- Tree
  - Now child nodes don't render before the first expand #6257
  - Added `check-descendants` attribute. It determines if child nodes are checked when checking their parent node in `lazy` mode #6235
- Tag
  - Added `size` attribute #7203
- Datepicker
  - Now `timeFormat` can format the TimePicker when type is set to `datetimerange` #6052
  - Added `start-placeholder` and `end-placeholder`. They're placeholders for the two input boxes in range mode #7169
  - Added `value-format` attribute to customize the format of the binding value, #7367
  - Added `unlink-panels` attribute to unlink the two date panels when selecting a date range
- MessageBox
  - Added `closeOnHashChange` attribute #6043
  - Added `center` attribute so that the content can be centered #7029
  - Added `roundButton` attribute to display round Buttons #7029
  - Added `dangerouslyUseHTMLString` attribute. When set to `true`, `message` will be parsed as HTML string<sup>*</sup> #6043
  - Added `inputType` attribute to assign type for the inner input box, #7651
- Dialog
  - Added `width`、`fullscreen`、`append-to-body` attributes. Now Dialog can be nested
  - Added `center` attribute so that the content can be centered #7042
  - Added `focus-after-closed`、`focus-after-open` to improve accessibility #6511
- ColorPicker
  - Now you can type colors in the input box #6167
  - Added `size` and `disabled` attributes #7026
  - Added `popper-class` attribute #7351
- Message
  - Now color of the icons can be overridden by CSS #6207
  - Added `dangerouslyUseHTMLString` attribute. When set to `true`, `message` will be parsed as HTML string<sup>*</sup> #6207
  - Added `center` attribute so that the content can be centered #6875
- Notification
  - Added `position` attribute to configure where Notification pops up #6231
  - Added `dangerouslyUseHTMLString` attribute. When set to `true`, `message` will be parsed as HTML string<sup>*</sup> #6231
  - Added `showClose` attribute to hide the close button #6402
- Rate
  - Added `show-score` attribute to determine if current score is displayed #6295
- Tabs
  - Added `tab-position` attribute #6096
- Radio
  - Added `border` and `size` attributes #6690
- Checkbox
  - Added `border` and `size` attributes #6690
- Alert
  - Added `center` attribute so that the content can be centered #6876
- Menu
  - Added `background-color`, `text-color` and `active-text-color` attributes #7064
  - Added `open` and `close` methods to open and close SubMenu programmatically, #7412
- Form
  - Added `inline-message` attribute to determine if the validation message is displayed in inline style #7032
  - Added `status-icon` attribute to display a feedback icon when validated #7032
  - Form and FormItem now have a `size` attribute. Inner components will inherit this size if not specified on themselves, #7428
  - `validate` method will now return a promise if the callback is omitted, #7405
  - Added `clearValidate` method for clearing validating results for all form items, #7623
- Input
  - Added `suffix` and `prefix` named slots, `suffixIcon` and `prefixIcon` attributes to add contents inside the input box #7032
- Breadcrumb
  - Added `separator-class` attribute to support icons as item separators #7203
- Steps
  - Added `simple` attribute to activate simple-styled Steps #7274
- Pagination
  - Added `prev-text` and `next-text` attributes to customize texts of previous page and next page #7005
- Loading
  - Now you can customize spinner icon and background color with `spinner` and `background` prop, #7390
- Autocomplete
  - Added `debounce` attribute, #7413
- Upload
  - Added `limit` and `on-exceed` attributes to limit the amount of files, #7405
- DateTimePicker
  - Added `time-arrow-control` attribute to activate `arrow-control` of the nesting TimePicker, #7438
- Layout
  - Added a new breakpoint `xl` for viewport wider than 1920px
- Table
  - Added `span-method` attribute for merging cells
  - Added `clearSort` method to clear sorting programmatically
  - Added `clearFilter` method to clear filter programmatically
  - For expandable rows, when a row is expanded, a `.expanded` class will be added to its class list, so that you can customize its style
  - Added `size` attribute
  - Added `toggleRowExpansion` method to expand or collapse expandable rows programmatically
  - Added `cell-class-name` attribute to assign class name for cells
  - Added `cell-style` attribute to style cells
  - Added `header-row-class-name` attribute to assign class name for header rows
  - Added `header-row-style` attribute to style header rows
  - Added `header-cell-class-name` attribute to assign class name for header cells
  - Added `header-cell-style` attribute to style header cells
  - TableColumn's `prop` attribute now accepts `object[key]` notations
  - Added `index` attribute for TableColumn to customize row indices
- Select
  - Added `reserve-keyword` attribute for reserving current search keyword after selecting an option

#### Bug fixes
- DatePicker
  - Fixed `v-model` returning the second day of the selected week in week mode #6038
  - Fixed the first input being cleared in `daterange` type #6021
- DateTimePicker
  - Fixed DateTimePicker and TimePicker affecting each other when picked #6090
  - Fixed hour and second can be beyond limit when selecting time #6076
- TimePicker
  - Fixed `v-model` not update correctly when blurred #6023
- Dialog
  - Fixed texts having blurry edges when opening and closing nesting dropdowns #6088
- Select
  - Improved performance. Now Vue dev-tool won't crash when a large number of Selects are destroyed #6151
- Table
  - Fixed a bug that Table remains hiding when its parent element appears from `display: none`
  - Fixed Table expanding its width when its parent element has `display: flex`
  - Fixed a bug that fixed columns of a Table with `append` slot would disappear when data is dynamically fetched
  - Fixed `expand-row-keys` attribute not working with initial value
  - Fixed filter failing when `data` updates
  - Fixed a calculation error of fixed columns layout with grouped headers
  - Fixed a dynamic `max-height` bug
  - Fixed some style calculation errors

#### Breaking changes
- General
  - Removed `theme-default`
  - Compatible with Vue 2.5.2+ and IE 10+
  - `change` event of form components and `current-change` event of Pagination now only trigger on user interaction
  - `size` attribute of Button and form components now accept `medium`, `small` and `mini`
  - To facilitate the use of third-party icons, `icon` attribute of Button and Steps, `prefix-icon` and `suffix-icon` attributes of Input now require a full class name
- Dialog
  - Removed `size` attribute. Now the size of Dialog can be configured by `width` and `fullscreen`
  - Now the visibility of Dialog cannot be controlled by `v-model`
- Rate
  - `text-template` is renamed to `score-template`
- Dropdown
  - `menu-align` is renamed to `placement`. Now it supports more positions
- Transfer
  - `footer-format` is renamed to `format`
- Switch
  - Attributes starting with `on-*` will be parsed to events in JSX, making all `on-*` attributes of Switch not
  able to work in JSX. So `on-*` attributes are renamed to `active-*`, and accordingly `off-*` attributes are renamed to `inactive-*`. This change affects the following attributes: `on-icon-class`, `off-icon-class`, `on-text`, `off-text`, `on-color`, `off-color`, `on-value`, `off-value`
  - `active-text` and `inactive-text` attributes now don't have default values
- Tag
  - `type` attribute now accepts `success`, `info`, `warning` and `danger`
- Menu
  - Removed `theme` attribute. The color of Menu can be configured using `background-color`, `text-color` and `active-text-color`
- Input
  - Removed `icon` attribute. Now the suffix icon can be configured using `suffix-icon` attribute or `suffix` named slot
  - Removed `on-icon-click` attribute and `click` event. Now to add click handler on icons, please use named slots
  - `change` event now behaves like the native input element, which triggers only on blur or pressing enter. If you need to respond to user input in real time, you can use `input` event.
- Autocomplete
  - Removed `custom-item` attribute. Now the template of input suggestions can be customized using `scoped slot`
  - Removed `props` attribute. Now you can use `value-key` attribute to designate key name of the input suggestion object for display
- Steps
  - Removed `center` attribute
  - Now the Steps will fill its parent container by default
- DatePicker
  - The params of DatePicker's `change` event is now the binding value itself. Its format is controlled by `value-format`
- Table
  - Removed support for customizing column template using `inline-template`
  - `sort-method` now aligns with `Array.sort`. It should return a number instead of a boolean
  - `append` slot is moved outside the `tbody` element to avoid multiple rendering
  - `expand` event is renamed to `expand-change`
  - The params of `row-class-name` and `row-style` method is now an object

##
<i><sup>*</sup> Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to [XSS attacks](https://en.wikipedia.org/wiki/Cross-site_scripting). So when `dangerouslyUseHTMLString` is on, please make sure the content of `message` is trusted, and **never** assign `message` to user-provided content.</i>

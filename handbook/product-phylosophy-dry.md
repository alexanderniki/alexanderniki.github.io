# Don't repeat yourself (не повторяйся)

Don’t repeat yourself, DRY (не повторяйся) — это принцип разработки программного обеспечения, нацеленный на снижение повторения информации различного рода, особенно в системах со множеством слоёв абстрагирования. Принцип DRY формулируется как: «Каждая часть знания должна иметь единственное, непротиворечивое и авторитетное представление в рамках системы»

Этот принцип можно применять к схемам БД, планам тестирования, сборкам ПО и документации.

В контексте проектирования UI этот принцип можно трактовать как необходимость устранения избыточности в интерфейсе.

Например: если кнопка установки напоминания меняет свое состояние с "Напомнить" на "Удалить напоминание", то в большистве случаев, показывать человеку дополнительное всплывающее уведомление не требуется. Само по себе изменение состояния кнопки уже сигнализирует об успешной постановке напоминания и дополнительное уведомление не требуется и является прямым нарушением принципа DRY.
Вместе с этим, появление нотификации нарушает принцип [Бритва оккама]() и, также, ведет к попытке поместить [локус внимания]() пользователя на два объекта одновременно (смена надписи на кнопке и всплывание уведомления одновременно).

Нарушения принципа DRY называют WET — «Write Everything Twice» (Пиши всё по два раза) или «We Enjoy Typing» (Нам нравится печатать).

---

Источники:

- [ru.wikipedia: Don't repeat yourself](https://ru.wikipedia.org/wiki/Don’t_repeat_yourself)
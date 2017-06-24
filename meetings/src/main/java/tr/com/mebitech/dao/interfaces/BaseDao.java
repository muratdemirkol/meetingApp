package tr.com.mebitech.dao.interfaces;

import java.util.List;

import tr.com.mebitech.entity.BaseEntity;

/**
 * Tüm crud iþlemlerinin tek çatý altýnda gelen
 * verinin türüne göre (Department veya Employe gibi)
 * yapýlabilmesi için bu þekilde kullaným saðladým.
 */
public interface BaseDao <T extends BaseEntity> {
	T insert(T t);
	T update(T t);
	boolean delete(T t);
	List<T> getAllList();
}

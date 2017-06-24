package tr.com.mebitech.dao.interfaces;

import java.util.List;

import tr.com.mebitech.entity.BaseEntity;

/**
 * T�m crud i�lemlerinin tek �at� alt�nda gelen
 * verinin t�r�ne g�re (Department veya Employe gibi)
 * yap�labilmesi i�in bu �ekilde kullan�m sa�lad�m.
 */
public interface BaseDao <T extends BaseEntity> {
	T insert(T t);
	T update(T t);
	boolean delete(T t);
	List<T> getAllList();
}

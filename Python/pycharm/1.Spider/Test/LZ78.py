#!/usr/bin/env python
# -*- coding:utf-8 -*- 
# @Author   : ATIME
# @License  : GNU General Public License
# @Contact  : atime2008@atime.org.cn   
# @Time     : 2017/12/31 22:00
# @File     : LZ78.py
# @Version  : Python2.7.14


def compress(message):
    tree_dict, m_len, i = {}, len(message), 0
    while i < m_len:
        print(tree_dict)
        # case I
        if message[i] not in tree_dict.keys():
            yield (0, message[i])
            tree_dict[message[i]] = len(tree_dict) + 1
            i += 1
        # case III
        elif i == m_len - 1:
            yield (tree_dict.get(message[i]), '')
            i += 1
        else:
            for j in range(i + 1, m_len):
                # case II
                if message[i:j + 1] not in tree_dict.keys():
                    yield (tree_dict.get(message[i:j]), message[j])
                    tree_dict[message[i:j + 1]] = len(tree_dict) + 1
                    i = j + 1
                    break
                # case III
                elif j == m_len - 1:
                    yield (tree_dict.get(message[i:j + 1]), '')
                    i = j + 1


def uncompress(packed):
    unpacked, tree_dict = '', {}
    for index, ch in packed:
        if index == 0:
            unpacked += ch
            tree_dict[len(tree_dict) + 1] = ch
        else:
            term = tree_dict.get(index) + ch
            unpacked += term
            tree_dict[len(tree_dict) + 1] = term
    return unpacked


if __name__ == '__main__':
    messages = ['ABBCBCABABCAABCAAB', 'BABAABRRRA', 'AAAAAAAAA']
    for m in messages:
        pack = compress(m)
        # print(pack)
        unpack = uncompress(pack)
        # print(unpack)
        print(unpack == m)